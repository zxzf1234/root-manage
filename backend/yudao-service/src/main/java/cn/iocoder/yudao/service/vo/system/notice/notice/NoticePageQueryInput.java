package cn.iocoder.yudao.service.vo.system.notice.notice;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import java.math.BigDecimal;

@Schema(description = "分页查询消息通知")
@Data
public class NoticePageQueryInput extends PageParam {

    @Schema(description = "是否已读")
    private Boolean isRead;

    @Schema(description = "通知人")
    private Long notifierId;

}