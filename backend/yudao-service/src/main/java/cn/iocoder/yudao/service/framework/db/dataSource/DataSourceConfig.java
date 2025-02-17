package cn.iocoder.yudao.service.framework.db.dataSource;

import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpResponse;
import cn.hutool.http.HttpUtil;

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

    @Value("${xiyu.is-local}")
    private boolean isLocal;

    @Value("${xiyu.account-router_url}")
    private String accountRouterUrl;

    @Value("${spring.application.number}")
    private String applicationNo;

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

    private Map<Object, Object> getDateSource() throws Exception {
        Map<Object, Object> DataSources = new HashMap<>();
        System.out.println("this is isLocal" + isLocal);
        if(isLocal){
            System.out.println("this is defaultDbUrl " + defaultDbUrl);
            System.out.println("this is defaultDbUsername " + defaultDbUsername);
            System.out.println("this is defaultDbPassword " + defaultDbPassword);
            System.out.println("this is defaultDbDriverClassName " + defaultDbDriverClassName);
            DriverManagerDataSource defaultDataSource = new DriverManagerDataSource();
            defaultDataSource.setUrl(defaultDbUrl);
            defaultDataSource.setUsername(defaultDbUsername);
            defaultDataSource.setPassword(defaultDbPassword);
            defaultDataSource.setDriverClassName(defaultDbDriverClassName);
            DataSources.put("default", defaultDataSource);
        }else{
            // 从server router获取当前服务器的数据库信息
            String json = "{\"projectNo\":\"" + applicationNo +"\"}";
            HttpResponse response = HttpRequest.post(accountRouterUrl+"/devops-server/admin-api/infra/devops/customer/get-by-ip-and-project")
                    .body(json)
                    .header("Content-Type", "application/json") // 设置请求头
                    .execute(); // 执行请求

            // 检查响应状态码
            if (response.isOk()) {
                // 获取响应体
                String body = response.body();
                JSONObject jsonObject = JSONUtil.parseObj(body);

                // 获取"data"数组
                JSONArray dataArray = jsonObject.getJSONArray("data");

                // 遍历"data"数组
                for (Object obj : dataArray) {
                    if (obj instanceof JSONObject item) {
                        // 获取databaseName
                        String databaseName = item.getStr("databaseName");
                        JSONObject serverObject = item.getJSONObject("server");

                        // 从server对象中获取databasePassword
                        String databasePassword = serverObject != null ? serverObject.getStr("databasePassword") : "";

                        DriverManagerDataSource dataSource = new DriverManagerDataSource();
                        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/" + databaseName + "?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true");
                        dataSource.setUsername("root");
                        dataSource.setPassword(databasePassword);
                        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
                        DataSources.put(databaseName, dataSource);
                    }
                }
            } else {
                throw new Exception("从server router获取数据库信息失败");
            }


        }
        return DataSources;
    }
}
