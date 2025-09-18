package com.xiyu.service.service.infra.data;

import com.xiyu.service.vo.infra.data.dictType.DictDataListAllSimpleOutput;
import com.xiyu.service.vo.infra.data.dictType.DictDataListOutput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeUpdateInput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeCreateInput;
import com.xiyu.service.vo.infra.data.dictType.*;
import com.xiyu.service.vo.infra.data.dictType.DictTypeGetOutput;

import java.util.*;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;

/**
 * 字典类型 Service 接口
 */
public interface DictTypeService {

    UUID create(DictTypeCreateInput inputVO);

    Boolean update(DictTypeUpdateInput inputVO);

    Boolean delete(UUID id);

    PageResult<DictTypePageOutput> page(DictTypePageInput inputVO);

    DictTypeGetOutput get(UUID id);

    List<DictTypeListAllSimpleOutput> listAllSimple();

    List<DictDataListAllSimpleOutput> listAllData();

    List<DictDataListOutput> dataList(UUID typeId);

}
