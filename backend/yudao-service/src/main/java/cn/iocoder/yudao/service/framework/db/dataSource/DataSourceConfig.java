package cn.iocoder.yudao.service.framework.db.dataSource;

import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import cn.iocoder.yudao.service.framework.account.service.AccountInfo;
import cn.iocoder.yudao.service.framework.account.service.AccountService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.util.*;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpResponse;
import oshi.SystemInfo;
import oshi.hardware.ComputerSystem;

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

    @Value("${spring.profiles.active}")
    private String springProfiles;

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
        // todo 逻辑反转
        if(!Objects.equals(springProfiles, "local")){
            DriverManagerDataSource defaultDataSource = new DriverManagerDataSource();
            defaultDataSource.setUrl(defaultDbUrl);
            defaultDataSource.setUsername(defaultDbUsername);
            defaultDataSource.setPassword(defaultDbPassword);
            defaultDataSource.setDriverClassName(defaultDbDriverClassName);
            DataSources.put("default", defaultDataSource);
        }else{

            List<AccountInfo> accountInfos = accountService.getAccountInfos();
            System.out.println(accountInfos);
            for(AccountInfo accountInfo : accountInfos){
                DriverManagerDataSource dataSource = new DriverManagerDataSource();
                dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/" + accountInfo.getDatabaseName() + "?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true");
                dataSource.setUsername("root");
                dataSource.setPassword(accountInfo.getDatabasePassword());
                dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
                DataSources.put(accountInfo.getAccountNo(), dataSource);
            }

        }
        return DataSources;
    }

}
