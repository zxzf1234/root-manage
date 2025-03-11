package cn.iocoder.yudao.service.convert.system.notice;

import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeSetReadInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetUnreadCountInput;
import cn.iocoder.yudao.service.model.system.notice.SystemNotice;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryInput;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.babyfish.jimmer.Page;

/**
 * 通知管理 Convert
 */
@Mapper
public interface NoticeConvert {
    NoticeConvert INSTANCE = Mappers.getMapper(NoticeConvert.class);


    List<NoticePageQueryOutput> pageQueryOutputConvert(List<SystemNotice> output);

}
