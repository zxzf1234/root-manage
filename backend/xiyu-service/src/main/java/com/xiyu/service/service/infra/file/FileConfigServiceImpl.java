package com.xiyu.service.service.infra.file;

import cn.hutool.core.io.resource.ResourceUtil;
import cn.hutool.core.util.IdUtil;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.util.json.JsonUtils;
import com.xiyu.service.util.validation.ValidationUtils;
import com.xiyu.service.framework.file.core.client.FileClient;
import com.xiyu.service.framework.file.core.client.FileClientConfig;
import com.xiyu.service.framework.file.core.client.FileClientFactory;
import com.xiyu.service.framework.file.core.enums.FileStorageEnum;
import com.xiyu.service.vo.infra.file.config.FileConfigCreateReqVO;
import com.xiyu.service.vo.infra.file.config.FileConfigPageReqVO;
import com.xiyu.service.vo.infra.file.config.FileConfigUpdateReqVO;
import com.xiyu.service.convert.infra.file.FileConfigConvert;
import com.xiyu.service.model.infra.file.InfraFileConfig;
import com.xiyu.service.model.infra.file.InfraFileConfigDraft;
import com.xiyu.service.repository.infra.file.InfraFileConfigRepository;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.babyfish.jimmer.Page;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import jakarta.annotation.Resource;
import jakarta.validation.Validator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;
import static com.xiyu.service.errorCode.infra.ErrorCodeConstants.FILE_CONFIG_DELETE_FAIL_MASTER;
import static com.xiyu.service.errorCode.infra.ErrorCodeConstants.FILE_CONFIG_NOT_EXISTS;

/**
 * 文件配置 Service 实现类
 *
 * @author 芋道源码
 */
@Service
@Validated
@Slf4j
public class FileConfigServiceImpl implements FileConfigService {

    @Resource
    private FileClientFactory fileClientFactory;
    /**
     * Master FileClient 对象，有且仅有一个，即 {@link InfraFileConfig#master()} 对应的
     */
    @Getter
    private FileClient masterFileClient;

    @Resource
    private InfraFileConfigRepository infraFileConfigRepository;

    @Resource
    private Validator validator;

    @Value("${spring.application.number}")
    private String applicationNo;

    @Override
    public void initLocalCache() {
        // 第一步：查询数据
        List<InfraFileConfig> configs = infraFileConfigRepository.findAll();
        log.info("[initLocalCache][缓存文件配置，数量为:{}]", configs.size());

        // 第二步：构建缓存：创建或更新文件 Client

        configs.forEach(config -> {

            fileClientFactory.createOrUpdateFileClient(config.id(), config.storage(), config.config(), applicationNo);

            // 如果是 master，进行设置
            if (Boolean.TRUE.equals(config.master())) {
                masterFileClient = fileClientFactory.getFileClient(config.id());
            }
        });
    }

    @Override
    public Long createFileConfig(FileConfigCreateReqVO createReqVO) {
        // 插入
        InfraFileConfig fileConfig = FileConfigConvert.INSTANCE.convert(createReqVO);
        fileConfig = InfraFileConfigDraft.$.produce(fileConfig, draft -> draft.setConfig(parseClientConfig(createReqVO.getStorage(), createReqVO.getConfig()))
                .setMaster(false));
        // 默认非 master
        fileConfig = infraFileConfigRepository.insert(fileConfig);
        // 返回
        return fileConfig.id();
    }

    @Override
    public void updateFileConfig(FileConfigUpdateReqVO updateReqVO) {
        // 校验存在
        InfraFileConfig config = validateFileConfigExists(updateReqVO.getId());
        // 更新
        InfraFileConfig updateObj = FileConfigConvert.INSTANCE.convert(updateReqVO);
        updateObj = InfraFileConfigDraft.$.produce(updateObj, draft -> draft.setConfig(parseClientConfig(config.storage(), updateReqVO.getConfig())));

        infraFileConfigRepository.update(updateObj);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateFileConfigMaster(Long id) {
        // 校验存在
        validateFileConfigExists(id);
        // 更新其它为非 master in new InfraFileConfig().setMaster(false)
        infraFileConfigRepository.update(InfraFileConfigDraft.$.produce(draft -> draft.setMaster(false)));
        // 更新
        infraFileConfigRepository.update(InfraFileConfigDraft.$.produce(draft -> draft.setId(id).setMaster(true)));
    }

    private FileClientConfig parseClientConfig(Integer storage, Map<String, Object> config) {
        // 获取配置类
        Class<? extends FileClientConfig> configClass = FileStorageEnum.getByStorage(storage)
                .getConfigClass();
        FileClientConfig clientConfig = JsonUtils.parseObject2(JsonUtils.toJsonString(config), configClass);
        // 参数校验
        ValidationUtils.validate(validator, clientConfig);
        // 设置参数
        return clientConfig;
    }

    @Override
    public void deleteFileConfig(Long id) {
        // 校验存在
        InfraFileConfig config = validateFileConfigExists(id);
        if (Boolean.TRUE.equals(config.master())) {
            throw exception(FILE_CONFIG_DELETE_FAIL_MASTER);
        }
        // 删除
        infraFileConfigRepository.deleteById(id);
    }

    private InfraFileConfig validateFileConfigExists(Long id) {
        Optional<InfraFileConfig>  opConfig = infraFileConfigRepository.findById(id);
        if (opConfig.isEmpty()) {
            throw exception(FILE_CONFIG_NOT_EXISTS);
        }
        return opConfig.get();
    }

    @Override
    public InfraFileConfig getFileConfig(Long id) {
        return infraFileConfigRepository.findById(id).get();
    }

    @Override
    public PageResult<InfraFileConfig> getFileConfigPage(FileConfigPageReqVO pageReqVO) {
        Page<InfraFileConfig> postPage = infraFileConfigRepository.selectPage(pageReqVO);
        return new PageResult<>(postPage.getRows(), postPage.getTotalRowCount());
    }

    @Override
    public String testFileConfig(Long id) throws Exception {
        // 校验存在
        validateFileConfigExists(id);
        // 上传文件
        byte[] content = ResourceUtil.readBytes("file/erweima.jpg");
        return fileClientFactory.getFileClient(id).upload(content, IdUtil.fastSimpleUUID() + ".jpg", "image/jpeg");
    }

    @Override
    public FileClient getFileClient(Long id) {
        return fileClientFactory.getFileClient(id);
    }

}
