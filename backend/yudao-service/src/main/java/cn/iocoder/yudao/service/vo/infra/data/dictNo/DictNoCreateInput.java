package cn.iocoder.yudao.service.vo.infra.data.dictNo;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraDictNoBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;

@Schema(description = "新建字段编号")
@Data
public class DictNoCreateInput extends InfraDictNoBase {

}