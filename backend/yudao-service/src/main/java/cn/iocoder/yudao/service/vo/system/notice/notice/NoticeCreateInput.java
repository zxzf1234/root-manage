package cn.iocoder.yudao.service.vo.system.notice.notice;

import cn.iocoder.yudao.service.vo.system.notify.baseVO.SystemNoticeBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "创建通知公告")
@Data
public class NoticeCreateInput extends SystemNoticeBase {

}