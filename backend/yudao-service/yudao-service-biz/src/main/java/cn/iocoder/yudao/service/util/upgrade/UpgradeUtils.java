package cn.iocoder.yudao.service.util.upgrade;

import cn.hutool.core.date.DateUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.RuntimeUtil;
import cn.iocoder.yudao.service.framework.codegen.config.SchemaHistory;

import javax.annotation.Resource;
import java.io.File;
import java.time.LocalDateTime;

public class UpgradeUtils {

    @Resource
    private SchemaHistory schemaHistory;

    public boolean upgradeSql(String sql){
        String curDate = DateUtil.format(LocalDateTime.now(), "yyyyMMdd");
        String curMouth = DateUtil.format(LocalDateTime.now(), "yyyyMM");
        String curDay = DateUtil.format(LocalDateTime.now(), "dd");

        Integer curGitUserVersion = schemaHistory.getCurGitUserVersion();
        Integer curGitUserId = schemaHistory.getCurGitUserId();
        if (curGitUserVersion == null || curGitUserId == null)
            return false;
        String path = FileUtil.getAbsolutePath("db/migration").replace("target/classes", "src/main/resources") + "/" + curMouth + "/" + curDay;

        String newFileName = path + "/" + "V"+ curDate + "_" + curGitUserId + "_" + String.format("%3d", curGitUserVersion + 1).replace(" ", "0") + ".sql";
        File newFile = FileUtil.touch(newFileName);
        FileUtil.appendUtf8String(sql, newFile);
        RuntimeUtil.execForStr("git add " + newFileName);
        return true;
    }
}
