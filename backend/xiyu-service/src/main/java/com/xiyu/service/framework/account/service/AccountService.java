package com.xiyu.service.framework.account.service;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpResponse;
import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.xiyu.service.util.date.DateUtils;
import com.xiyu.service.vo.infra.auth.AuthRefreshAccountInput;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import oshi.SystemInfo;
import oshi.hardware.ComputerSystem;

import java.time.LocalDateTime;
import java.util.*;

@Component
public class AccountService {

    List<AccountInfo> accountInfos = new ArrayList<>();

    public AccountService(@Value("${xiyu.devops-account-info-url}") String accountRouterUrl, @Value("${spring.application.number}") String applicationNo,
                          @Value("${xiyu.server-env}") String serverEnv) throws Exception {
        if(Objects.equals(serverEnv, "local"))
            return;
        // 从server router获取当前服务器的数据库信息
        String json = "{\"projectNo\":\"" + applicationNo +"\"}";

        HttpResponse response = HttpRequest.post(accountRouterUrl)
                .body(json).header("Content-Type", "application/json").execute(); // 执行请求

        // 检查响应状态码
        if (!response.isOk()) {
            throw new Exception("从server router获取数据库信息失败");
        }
        // 获取响应体
        String body = response.body();
        JSONObject jsonObject = JSONUtil.parseObj(body);

        // 获取"data"数组
        JSONArray dataArray = jsonObject.getJSONArray("data");

        // 遍历"data"数组
        for (Object obj : dataArray) {
            if (obj instanceof JSONObject item) {
                String accountNo = item.getStr("customerNo");
                String databaseName = item.getStr("databaseName");
                LocalDateTime expiresTime = item.getDate("expiresTime") == null ? null : DateUtils.of(item.getDate("expiresTime"));
                Integer onlineAccountCount = item.getInt("onlineAccountCount");
                String version = null;
                JSONObject versionObject = item.getJSONObject("version");
                if(versionObject != null)
                    version = versionObject.getStr("version");
                JSONObject serverObject = item.getJSONObject("server");

                String databasePassword = serverObject != null ? serverObject.getStr("databasePassword") : "";
                String uniqueCode =  serverObject != null ? serverObject.getStr("uniqueCode").toLowerCase(Locale.ROOT) : "";
                checkServerUniqueCode(uniqueCode);

                AccountInfo info = new AccountInfo().setAccountNo(accountNo).setDatabaseName(databaseName).setDatabasePassword(databasePassword).setUniqueCode(uniqueCode)
                        .setExpiresTime(expiresTime).setVersion(version).setOnlineAccountCount(onlineAccountCount);
                accountInfos.add(info);
            }
        }

    }

    public List<AccountInfo> getAccountInfos(){
        return accountInfos;
    }

    public boolean refreshAccountInfo(AuthRefreshAccountInput input){
        for(AccountInfo accountInfo : accountInfos){
            if(accountInfo.getAccountNo().equals(input.getAccountNo())){
                accountInfo.setExpiresTime(input.getExpiresTime());
                accountInfo.setOnlineAccountCount(input.getOnlineAccountCount());
            }
        }
        return true;
    }

    public boolean isExpires(String accountNo){
        for(AccountInfo accountInfo : accountInfos){
            if(accountInfo.getAccountNo().equals(accountNo)){
               if(accountInfo.getExpiresTime() != null && accountInfo.getExpiresTime().isBefore(LocalDateTime.now()))
                   return true;
               break;
            }
        }
        return false;
    }

    private void checkServerUniqueCode(String uniqueCode) throws Exception{
        if(uniqueCode.isEmpty())
            return;
        SystemInfo systemInfo = new SystemInfo();
        ComputerSystem computerSystem = systemInfo.getHardware().getComputerSystem();

        // 获取主板 UUID
        String hardwareUUID = computerSystem.getHardwareUUID().toLowerCase(Locale.ROOT);
        if(!uniqueCode.equals(hardwareUUID))
            throw new Exception("服务器唯一码和后台记录的唯一码不一致");
    }
}
