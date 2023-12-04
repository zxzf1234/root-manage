package cn.iocoder.yudao.service.convert.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoCreateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoGetOutput;
import cn.iocoder.yudao.service.model.infra.data.InfraDictNo;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.*;

/**
 * 字典编号 Convert
 */
@Mapper
public interface DictNoConvert {
    DictNoConvert INSTANCE = Mappers.getMapper(DictNoConvert.class);

    DictNoGetOutput getOutputConvert(InfraDictNo output);

    InfraDictNo createInputConvert(DictNoCreateInput input);

    List<DictNoQueryOutput> queryPageOutputConvert(Page<InfraDictNo> output);

    InfraDictNo updateInputConvert(DictNoUpdateInput input);

}


