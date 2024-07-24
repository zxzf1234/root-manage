package cn.iocoder.yudao.service.vo.system.notice.notice;

import cn.iocoder.yudao.framework.common.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;

@Schema(description = "分页获取通知公告列表")
@Data
public class NoticePageInput extends PageParam {

    @Schema(description = "公告状态（0正常 1关闭）", example = "0")
    private Integer status;

    @Schema(description = "公告标题", example = "小博主")
    private String title;

}