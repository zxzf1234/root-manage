package com.xiyu.service.convert.infra.data;

import com.xiyu.service.vo.infra.data.dictNo.DictNoQueryOutput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoUpdateInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoCreateInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoGetOutput;
import com.xiyu.service.model.infra.data.InfraDictNo;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * 字典编号 Convert
 */
@Mapper
public interface DictNoConvert {
    DictNoConvert INSTANCE = Mappers.getMapper(DictNoConvert.class);

    DictNoGetOutput getOutputConvert(InfraDictNo output);

    InfraDictNo createInputConvert(DictNoCreateInput input);

    List<DictNoQueryOutput> queryPageOutputConvert(List<InfraDictNo> output);

    InfraDictNo updateInputConvert(DictNoUpdateInput input);

}


