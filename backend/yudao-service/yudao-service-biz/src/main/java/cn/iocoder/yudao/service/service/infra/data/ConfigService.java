package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.config.ConfigPageOutput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigPageInput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigGetOutput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigCreateInput;
import java.util.*;
import cn.iocoder.yudao.service.vo.infra.data.config.*;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 配置管理 Service 接口
 */
public interface ConfigService {

    String create(ConfigCreateInput inputVO);

    Boolean update(ConfigUpdateInput inputVO);

    Boolean deleted(UUID id);

    ConfigGetOutput get(UUID id);

    String getValueByKey(String key);

    PageResult<ConfigPageOutput> page(ConfigPageInput inputVO);

}
