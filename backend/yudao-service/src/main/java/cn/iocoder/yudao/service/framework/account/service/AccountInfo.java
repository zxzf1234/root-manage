package cn.iocoder.yudao.service.framework.account.service;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AccountInfo {
    String accountNo;

    String databaseName;

    String databasePassword;

    String uniqueCode;

    LocalDateTime expiresTime;

    Integer onlineAccountCount;

    String version;
}
