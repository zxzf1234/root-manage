package cn.iocoder.yudao.service.convert.infra.data;

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


}
