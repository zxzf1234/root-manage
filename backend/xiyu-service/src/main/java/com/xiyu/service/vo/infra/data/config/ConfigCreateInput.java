package com.xiyu.service.vo.infra.data.config;

import com.xiyu.service.vo.infra.data.baseVO.InfraConfigBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "新增配置")
@Data
public class ConfigCreateInput extends InfraConfigBase {

}