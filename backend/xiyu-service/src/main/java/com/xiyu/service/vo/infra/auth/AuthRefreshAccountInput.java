package com.xiyu.service.vo.infra.auth;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;

@Schema(description = "刷新账号")
@Data
public class AuthRefreshAccountInput {
    String accountNo;

    LocalDateTime expiresTime;

    Integer onlineAccountCount;
}
