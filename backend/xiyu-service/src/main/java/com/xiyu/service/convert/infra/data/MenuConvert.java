package com.xiyu.service.convert.infra.data;

import java.util.*;

import com.xiyu.service.model.infra.data.SystemMenu;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.xiyu.service.vo.infra.data.menu.*;

/**
 * 菜单管理 Convert
 */
@Mapper
public interface MenuConvert {
    MenuConvert INSTANCE = Mappers.getMapper(MenuConvert.class);

    List<MenuRespVO> convertList(List<SystemMenu> list);

    SystemMenu convert(MenuCreateReqVO bean);

    SystemMenu convert(MenuUpdateReqVO bean);

    MenuRespVO convert(SystemMenu bean);

    List<MenuSimpleRespVO> convertList02(List<SystemMenu> list);

}
