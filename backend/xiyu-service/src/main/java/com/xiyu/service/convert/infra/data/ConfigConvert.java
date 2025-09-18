package com.xiyu.service.convert.infra.data;

import com.xiyu.service.vo.infra.data.config.ConfigPageOutput;
import com.xiyu.service.vo.infra.data.config.ConfigGetOutput;
import com.xiyu.service.vo.infra.data.config.ConfigUpdateInput;
import com.xiyu.service.vo.infra.data.config.ConfigCreateInput;
import com.xiyu.service.model.infra.data.InfraConfig;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * 配置管理 Convert
 */
@Mapper
public interface ConfigConvert {
    ConfigConvert INSTANCE = Mappers.getMapper(ConfigConvert.class);


    InfraConfig createInputConvert(ConfigCreateInput input);

    InfraConfig updateInputConvert(ConfigUpdateInput input);

    ConfigGetOutput getOutputConvert(InfraConfig output);

    List<ConfigPageOutput> pageOutputConvert(List<InfraConfig> output);

}
