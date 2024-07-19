package cn.iocoder.yudao.service.vo.infra.data.config;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraConfigBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;
import java.math.BigDecimal;

@Schema(description = "新增配置")
@Data
public class ConfigCreateInput extends InfraConfigBase {

}