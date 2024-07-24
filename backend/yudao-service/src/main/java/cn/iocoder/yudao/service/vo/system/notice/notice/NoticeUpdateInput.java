package cn.iocoder.yudao.service.vo.system.notice.notice;

import cn.iocoder.yudao.service.vo.system.notify.baseVO.SystemNoticeBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;

@Schema(description = "修改通知公告")
@Data
public class NoticeUpdateInput extends SystemNoticeBase {

    @Schema(description = "公告ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "岗位公告编号不能为空")
    private Long id;

}