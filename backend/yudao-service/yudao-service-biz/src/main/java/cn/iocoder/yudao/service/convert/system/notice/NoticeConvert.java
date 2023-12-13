package cn.iocoder.yudao.service.convert.system.notice;

import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeUpdateInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeCreateInput;
import cn.iocoder.yudao.service.model.system.notify.SystemNotice;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import cn.iocoder.yudao.service.vo.system.notice.notice.*;

/**
 * 通知公告管理 Convert
 */
@Mapper
public interface NoticeConvert {
    NoticeConvert INSTANCE = Mappers.getMapper(NoticeConvert.class);


    SystemNotice createInputConvert(NoticeCreateInput input);

    SystemNotice updateInputConvert(NoticeUpdateInput input);

    List<NoticePageOutput> pagePageOutputConvert(Page<SystemNotice> output);

    NoticeGetOutput getOutputConvert(SystemNotice output);

}
