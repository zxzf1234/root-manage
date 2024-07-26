package cn.iocoder.yudao.service.vo.system.post.post;

import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemPostBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "创建岗位")
@Data
public class PostCreateInput extends SystemPostBase {

}