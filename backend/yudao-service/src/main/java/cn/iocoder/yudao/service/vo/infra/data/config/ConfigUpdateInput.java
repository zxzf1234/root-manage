package cn.iocoder.yudao.service.vo.infra.data.config;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraConfigBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "更新配置")
@Data
public class ConfigUpdateInput extends InfraConfigBase {

    @Schema(description = "配置主键ID")
    private UUID id;

}