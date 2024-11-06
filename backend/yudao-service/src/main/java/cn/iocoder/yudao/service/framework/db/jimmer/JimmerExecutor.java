package cn.iocoder.yudao.service.framework.db.jimmer;

import cn.hutool.core.util.BooleanUtil;
import cn.iocoder.yudao.service.enums.infra.codegen.InfraCodegenExcludeFunctionEnum;
import cn.iocoder.yudao.service.enums.infra.codegen.InfraCodegenTableEnum;
import cn.iocoder.yudao.service.framework.codegen.config.SchemaHistory;
import cn.iocoder.yudao.service.util.upgrade.UpgradeUtils;
import org.apache.commons.lang.StringEscapeUtils;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.sql.runtime.*;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;
import java.sql.Connection;
import java.util.List;
import java.util.regex.Matcher;


@Configuration
public class JimmerExecutor {

    @Resource
    private SchemaHistory schemaHistory;

    @Bean
    public Executor executor() {
        return new Executor() {
            @Override
            public <R> R execute(@NotNull Args<R> args) {
                if(args.sql.contains("update") || args.sql.contains("insert") || args.sql.contains("delete"))
                {
                    upgradeData(args.sql, args.variables, args.ctx);
                }

                return DefaultExecutor
                        .INSTANCE
                        .execute(args);
            }

            @Override
            public BatchContext executeBatch(@NotNull Connection con, @NotNull String sql, @Nullable ImmutableProp generatedIdProp, @NotNull ExecutionPurpose purpose, @NotNull JSqlClientImplementor sqlClient) {
                return DefaultExecutor.INSTANCE.executeBatch(
                        con,
                        sql,
                        generatedIdProp,
                        purpose,
                        sqlClient
                );
            }
        };

    }

    void upgradeData(String sql, List<Object> variables, ExecutorContext ctx) {
        if(!sql.contains("update") && !sql.contains("insert") && !sql.contains("delete"))
            return;
        boolean isContain = false;
        // 基础数据增删改生成更新sql
        for(InfraCodegenTableEnum table : InfraCodegenTableEnum.values()){
            if(sql.contains(table.getValue() + "(") || sql.contains(table.getValue() + " ")) {
                isContain = true;
                break;
            }
        }
        if(!isContain)
            return;
        // 特定函数不生成
        if(ctx != null) {
            for(InfraCodegenExcludeFunctionEnum functionEnum : InfraCodegenExcludeFunctionEnum.values()){
                if (ctx.getElements().stream().anyMatch(element -> element.toString().contains(functionEnum.getValue()))){
                    return;
                }
            }

        }
        sql = commonSql(sql, variables);
        Integer curGitUserVersion = schemaHistory.getCurGitUserVersion();
        Integer curGitUserId = schemaHistory.getCurGitUserId();
        UpgradeUtils.upgradeSql(sql, curGitUserVersion, curGitUserId);

    }

    String commonSql(String sql, List<Object> variables){
        String[] arrSql = sql.split("\\?");
        int i = 0;
        sql = "";
        for (Object var: variables) {
            if (BooleanUtil.isBoolean(var.getClass()))
                sql = sql + arrSql[i] + StringEscapeUtils.escapeSql(String.valueOf(BooleanUtil.toInt((Boolean)var)));
            else
                sql = sql + arrSql[i] + "'" + StringEscapeUtils.escapeSql(Matcher.quoteReplacement(var.toString())) + "'";
            i++;
        }
        if (arrSql.length > i)
            sql = sql + arrSql[i];
        // insert要追加ignore
        sql = sql.replaceFirst("insert", "insert ignore");
        // 替换localTime null
        sql = sql.replaceFirst("'DbNull\\{type=class java.time.LocalDateTime}'", "NULL");
        // 追加回车 方便查看
        sql = sql + ";\r\n";
        return sql;
    }
}
