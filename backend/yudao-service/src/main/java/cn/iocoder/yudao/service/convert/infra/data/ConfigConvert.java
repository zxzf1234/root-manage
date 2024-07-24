package cn.iocoder.yudao.service.convert.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.config.ConfigPageOutput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigPageInput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigGetOutput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigCreateInput;
import cn.iocoder.yudao.service.model.infra.data.InfraConfig;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import cn.iocoder.yudao.service.vo.infra.data.config.*;

/**
 * 配置管理 Convert
 */
@Mapper
public interface ConfigConvert {
    ConfigConvert INSTANCE = Mappers.getMapper(ConfigConvert.class);


    InfraConfig createInputConvert(ConfigCreateInput input);

    InfraConfig updateInputConvert(ConfigUpdateInput input);

    ConfigGetOutput getOutputConvert(InfraConfig output);

    List<ConfigPageOutput> pageOutputConvert(Page<InfraConfig> output);

}
