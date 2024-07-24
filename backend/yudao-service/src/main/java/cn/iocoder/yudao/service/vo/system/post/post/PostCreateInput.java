package cn.iocoder.yudao.service.vo.system.post.post;

import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemPostBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;

@Schema(description = "创建岗位")
@Data
public class PostCreateInput extends SystemPostBase {

}