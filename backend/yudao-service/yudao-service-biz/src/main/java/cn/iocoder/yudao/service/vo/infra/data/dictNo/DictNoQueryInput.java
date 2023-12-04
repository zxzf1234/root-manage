package cn.iocoder.yudao.service.vo.infra.data.dictNo;

import cn.iocoder.yudao.framework.common.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;

@Schema(description = "字典编号查询")
@Data
public class DictNoQueryInput extends PageParam {

    @Schema(description = "前缀")
    private String prefix;

    @Schema(description = "备注")
    private String remark;

    @Schema(description = "编码名称")
    private String keyName;

}