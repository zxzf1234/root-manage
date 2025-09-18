package com.xiyu.service.service.infra.data;

import com.xiyu.service.vo.infra.data.config.ConfigPageOutput;
import com.xiyu.service.vo.infra.data.config.ConfigPageInput;
import com.xiyu.service.vo.infra.data.config.ConfigGetOutput;
import com.xiyu.service.vo.infra.data.config.ConfigUpdateInput;
import com.xiyu.service.model.infra.data.InfraConfigDraft;
import com.xiyu.service.model.infra.data.InfraConfig;
import com.xiyu.service.repository.infra.data.InfraConfigRepository;
import com.xiyu.service.vo.infra.data.config.ConfigCreateInput;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;
import java.util.*;

import org.springframework.transaction.annotation.Transactional;
import com.xiyu.service.util.entity.EntityUtils;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.convert.infra.data.ConfigConvert;
import com.xiyu.service.enums.infra.config.InfraConfigTypeEnum;
import cn.hutool.core.util.StrUtil;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;
import static com.xiyu.service.errorCode.infra.data.ConfigErrorCode.*;

/**
 * 配置管理 Service 实现类
 */
@Service
@Validated
public class ConfigServiceImpl implements ConfigService {

    @Resource
    private InfraConfigRepository infraConfigRepository;




    @Override
    @Transactional(rollbackFor = Exception.class)
    public String create(ConfigCreateInput inputVO) {
        // 校验正确性
        validateConfigForCreateOrUpdate(inputVO.getConfigKey());
        // 插入参数配置
        InfraConfig config = ConfigConvert.INSTANCE.createInputConvert(inputVO);
        config = InfraConfigDraft.$.produce(config, draft -> draft.setType(InfraConfigTypeEnum.CUSTOM.getValue()));
        config = infraConfigRepository.insert(config);
        return config.id().toString();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean update(ConfigUpdateInput inputVO) {
        Optional<InfraConfig> optionalOldInfraConfig = infraConfigRepository.findById(inputVO.getId());
        if(optionalOldInfraConfig.isEmpty()){
            throw exception(CONFIG_NOT_EXISTS);
        }
        InfraConfig updateInfraConfig = ConfigConvert.INSTANCE.updateInputConvert(inputVO);
        if (!EntityUtils.isEquals(optionalOldInfraConfig.get(), updateInfraConfig))
            infraConfigRepository.update(updateInfraConfig);
        return true;
    }

    private void validateConfigForCreateOrUpdate(String key) {
        // 校验自己存在
        validateConfigExists(null);
        // 校验参数配置 key 的唯一性
        if (StrUtil.isNotEmpty(key)) {
            validateConfigKeyUnique(null, key);
        }
    }

    public InfraConfig validateConfigExists(UUID id) {
        if (id == null) {
            return null;
        }
        Optional<InfraConfig> opConfig = infraConfigRepository.findById(id);
        if (opConfig.isEmpty()) {
            throw exception(CONFIG_NOT_EXISTS);
        }
        return opConfig.get();
    }

    public void validateConfigKeyUnique(UUID id, String key) {
        Optional<InfraConfig> opConfig = infraConfigRepository.findByConfigKey(key);
        if (opConfig.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的参数配置
        if (id == null) {
            throw exception(CONFIG_KEY_DUPLICATE);
        }
        if (opConfig.get().id() != id) {
            throw exception(CONFIG_KEY_DUPLICATE);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean deleted(UUID id) {
        // 校验配置存在
        InfraConfig config = validateConfigExists(id);
        // 内置配置，不允许删除
        if (InfraConfigTypeEnum.SYSTEM.getValue().equals(config.type())) {
            throw exception(CONFIG_CAN_NOT_DELETE_SYSTEM_TYPE);
        }
        // 删除
        infraConfigRepository.deleteById(id);
        return true;
    }

    @Override
    public ConfigGetOutput get(UUID id) {
        Optional<InfraConfig> optionalConfig = infraConfigRepository.findById(id);
        if(optionalConfig.isEmpty())
            throw exception(CONFIG_NOT_EXISTS);
        return ConfigConvert.INSTANCE.getOutputConvert(optionalConfig.get());
    }

    @Override
    public String getValueByKey(String key) {
        Optional<InfraConfig> optionalConfig = infraConfigRepository.findByConfigKey(key);
        if(optionalConfig.isEmpty())
            throw exception(CONFIG_NOT_EXISTS);
        return optionalConfig.get().value();
    }

    @Override
    public PageResult<ConfigPageOutput> page(ConfigPageInput inputVO) {
        Page<InfraConfig> postPage = infraConfigRepository.selectPage(inputVO);

        return new PageResult<>(ConfigConvert.INSTANCE.pageOutputConvert(postPage.getRows()), postPage.getTotalRowCount());
    }

}
