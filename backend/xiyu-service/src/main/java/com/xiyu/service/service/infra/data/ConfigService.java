package com.xiyu.service.service.infra.data;

import com.xiyu.service.vo.infra.data.config.ConfigPageOutput;
import com.xiyu.service.vo.infra.data.config.ConfigPageInput;
import com.xiyu.service.vo.infra.data.config.ConfigGetOutput;
import com.xiyu.service.vo.infra.data.config.ConfigUpdateInput;
import com.xiyu.service.vo.infra.data.config.ConfigCreateInput;
import java.util.*;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;

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
