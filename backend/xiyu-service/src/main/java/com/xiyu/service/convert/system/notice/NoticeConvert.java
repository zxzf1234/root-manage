package com.xiyu.service.convert.system.notice;

import com.xiyu.service.model.system.notice.SystemNotice;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryOutput;

import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * 通知管理 Convert
 */
@Mapper
public interface NoticeConvert {
    NoticeConvert INSTANCE = Mappers.getMapper(NoticeConvert.class);


    List<NoticePageQueryOutput> pageQueryOutputConvert(List<SystemNotice> output);

}
