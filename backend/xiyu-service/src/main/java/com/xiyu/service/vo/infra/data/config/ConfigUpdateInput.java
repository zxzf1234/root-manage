package com.xiyu.service.vo.infra.data.config;

import com.xiyu.service.vo.infra.data.baseVO.InfraConfigBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "更新配置")
@Data
public class ConfigUpdateInput extends InfraConfigBase {

    @Schema(description = "配置主键ID")
    private UUID id;

}