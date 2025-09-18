package com.xiyu.service.convert.infra.data;

import com.xiyu.service.model.infra.data.InfraDictData;
import com.xiyu.service.vo.infra.data.dictType.DictDataListAllSimpleOutput;
import com.xiyu.service.vo.infra.data.dictType.DictDataListOutput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeListAllSimpleOutput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeGetOutput;
import com.xiyu.service.vo.infra.data.dictType.DictTypePageOutput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeUpdateInput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeCreateInput;
import com.xiyu.service.model.infra.data.InfraDictType;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

/**
 * 字典类型 Convert
 */
@Mapper
public interface DictTypeConvert {
    DictTypeConvert INSTANCE = Mappers.getMapper(DictTypeConvert.class);


    InfraDictType createInputConvert(DictTypeCreateInput input);

    InfraDictType updateInputConvert(DictTypeUpdateInput input);

    InfraDictData updateInputDataConvert(DictTypeUpdateInput.data input);

    List<DictTypePageOutput> pagePageOutputConvert(List<InfraDictType> output);

    DictTypeGetOutput getOutputConvert(InfraDictType output);

    List<DictTypeListAllSimpleOutput> listAllSimpleListOutputConvert(List<InfraDictType> output);

    List<DictDataListAllSimpleOutput> listAllDataListOutputConvert(List<InfraDictData> output);

    @Mapping(source = "type.type", target = "dictType")
    DictDataListAllSimpleOutput AllDataListOutputConvert(InfraDictData output);

    List<DictDataListOutput> listListOutputConvert(List<InfraDictData> output);

}
