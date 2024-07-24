package cn.iocoder.yudao.service.convert.infra.data;

import cn.iocoder.yudao.service.model.infra.data.InfraDictData;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictDataListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictDataListOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeGetOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypePageOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeCreateInput;
import cn.iocoder.yudao.service.model.infra.data.InfraDictType;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;

/**
 * 字典类型 Convert
 */
@Mapper
public interface DictTypeConvert {
    DictTypeConvert INSTANCE = Mappers.getMapper(DictTypeConvert.class);


    InfraDictType createInputConvert(DictTypeCreateInput input);

    InfraDictType updateInputConvert(DictTypeUpdateInput input);

    InfraDictData updateInputDataConvert(DictTypeUpdateInput.data input);

    List<DictTypePageOutput> pagePageOutputConvert(Page<InfraDictType> output);

    DictTypeGetOutput getOutputConvert(InfraDictType output);

    List<DictTypeListAllSimpleOutput> listAllSimpleListOutputConvert(List<InfraDictType> output);

    List<DictDataListAllSimpleOutput> listAllDataListOutputConvert(List<InfraDictData> output);

    @Mapping(source = "type.type", target = "dictType")
    DictDataListAllSimpleOutput AllDataListOutputConvert(InfraDictData output);

    List<DictDataListOutput> listListOutputConvert(List<InfraDictData> output);

}
