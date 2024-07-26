package cn.iocoder.yudao.service.vo.infra.data.config;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraConfigBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "新增配置")
@Data
public class ConfigCreateInput extends InfraConfigBase {

}