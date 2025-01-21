package cn.iocoder.yudao.service.framework.db.dataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

@Configuration
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class DataSourceConfig {

    @Value("${spring.datasource.driver-class-name:com.mysql.cj.jdbc.Driver}")
    private String driverClassName;

    @Bean
    public DataSource dataSource() throws Exception {

        DataSourceRouter dataSourceRouter = new DataSourceRouter();
        Map<Object, Object> dateSource = getDateSource();
        if(dateSource.size() == 0){
            throw new Exception("未查询到要连接的数据库信息");
        }
        dataSourceRouter.setTargetDataSources(dateSource);

        System.out.println(dateSource.values().toArray()[0]);
        dataSourceRouter.setDefaultTargetDataSource(dateSource.values().toArray()[0]);
        return dataSourceRouter;
    }

    private Map<Object, Object> getDateSource(){
        Map<Object, Object> DataSources = new HashMap<>();

        String databaseName1 = "root_manage";
        String databaseName2 = "root_manage2";
        String userName = "root";
        String password = "888admin";


        DriverManagerDataSource dataSource1 = new DriverManagerDataSource();
        dataSource1.setUrl("jdbc:mysql://127.0.0.1:3306/" + databaseName1 + "?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true");
        dataSource1.setUsername(userName);
        dataSource1.setPassword(password);
        dataSource1.setDriverClassName("com.mysql.cj.jdbc.Driver");
        DataSources.put(databaseName1, dataSource1);

        DriverManagerDataSource dataSource2 = new DriverManagerDataSource();
        dataSource2.setUrl("jdbc:mysql://127.0.0.1:3306/" + databaseName2 + "?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true");
        dataSource2.setUsername(userName);
        dataSource2.setPassword(password);
        dataSource2.setDriverClassName("com.mysql.cj.jdbc.Driver");
        DataSources.put(databaseName2, dataSource2);
        return DataSources;

    }
}
