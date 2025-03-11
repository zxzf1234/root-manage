package cn.iocoder.yudao.service.vo.system.notice.notice;

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

@Schema(description = "获取未读通知信息")
@Data
@AllArgsConstructor
public class NoticeGetUnreadInfoOutput  {

    @Schema(description = "通知公告表主键ID")
    private Long maxId;

    @Schema(description = "数量")
    private Long count;
}