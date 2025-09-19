package com.xiyu.service.framework.db.dataSource;

import com.xiyu.service.framework.account.service.AccountInfo;
import com.xiyu.service.framework.account.service.AccountService;
import jakarta.annotation.Resource;
import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.util.*;

@Configuration
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class DataSourceConfig {

    @Value("${spring.datasource.url}")
    private String defaultDbUrl;

    @Value("${spring.datasource.username}")
    private String defaultDbUsername;

    @Value("${spring.datasource.password}")
    private String defaultDbPassword;

    @Value("${spring.datasource.driver-class-name}")
    private String defaultDbDriverClassName;

    @Value("${xiyu.server-env}")
    private String serverEnv;

    @Resource
    AccountService accountService;

    @Bean
    public DataSource dataSource() throws Exception {

        DataSourceRouter dataSourceRouter = new DataSourceRouter();
        Map<Object, Object> dateSource = getDateSource();
        if(dateSource.size() == 0){
            throw new Exception("未查询到要连接的数据库信息");
        }
        dataSourceRouter.setTargetDataSources(dateSource);

        dataSourceRouter.setDefaultTargetDataSource(dateSource.values().toArray()[0]);
        return dataSourceRouter;
    }

    private Map<Object, Object> getDateSource() {
        Map<Object, Object> DataSources = new HashMap<>();
        if(Objects.equals(serverEnv, "local")){
            DriverManagerDataSource defaultDataSource = new DriverManagerDataSource();
            defaultDataSource.setUrl(defaultDbUrl);
            defaultDataSource.setUsername(defaultDbUsername);
            defaultDataSource.setPassword(defaultDbPassword);
            defaultDataSource.setDriverClassName(defaultDbDriverClassName);
            DataSources.put("default", defaultDataSource);
        }else{
            List<AccountInfo> accountInfos = accountService.getAccountInfos();
            for(AccountInfo accountInfo : accountInfos){
                DriverManagerDataSource dataSource = new DriverManagerDataSource();
                dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/" + accountInfo.getDatabaseName() + "?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true");
                dataSource.setUsername("root");
                dataSource.setPassword(accountInfo.getDatabasePassword());
                dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
                DataSources.put(accountInfo.getAccountNo(), dataSource);

                Flyway flyway = Flyway.configure()
                        .dataSource(dataSource)
                        .locations("classpath:db/migration")
                        .baselineOnMigrate(true)
                        .load();
                flyway.migrate();
            }

        }
        return DataSources;
    }

}
