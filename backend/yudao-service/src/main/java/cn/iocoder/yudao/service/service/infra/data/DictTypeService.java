package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.dictType.DictDataListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictDataListOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeCreateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.*;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeGetOutput;

import java.util.*;

import cn.iocoder.yudao.framework.common.pojo.PageResult;

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
