package cn.iocoder.yudao.service.service.infra.file;

import cn.hutool.core.lang.Assert;
import cn.hutool.core.util.HexUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.digest.DigestUtil;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.util.io.FileUtils;
import cn.iocoder.yudao.service.framework.file.core.client.FileClient;
import cn.iocoder.yudao.service.framework.file.core.utils.FileTypeUtils;
import cn.iocoder.yudao.service.vo.infra.file.file.FilePageReqVO;

import cn.iocoder.yudao.service.model.infra.file.InfraFile;
import cn.iocoder.yudao.service.model.infra.file.InfraFileDraft;
import cn.iocoder.yudao.service.repository.infra.file.InfraFileRepository;
import lombok.SneakyThrows;
import org.babyfish.jimmer.Page;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import java.util.Optional;

import static cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.infra.ErrorCodeConstants.FILE_NOT_EXISTS;

/**
 * 文件 Service 实现类
 *
 * @author 芋道源码
 */
@Service
public class FileServiceImpl implements FileService {

    @Resource
    private FileConfigService fileConfigService;

    @Resource
    private InfraFileRepository infraFileRepository;

    @Override
    public PageResult<InfraFile> getFilePage(FilePageReqVO pageReqVO) {
        Page<InfraFile> postPage = infraFileRepository.selectPage(pageReqVO);
        return new PageResult<>(postPage.getRows(), postPage.getTotalRowCount());
    }

    @Override
    @SneakyThrows
    public String createFile(String name, String path, byte[] content) {
        byte[] md5Hash = DigestUtil.md5(content);
        // 将字节数组转换为十六进制字符串
        String md5String = HexUtil.encodeHexStr(md5Hash);

        Optional<InfraFile> optionalExistsFile = infraFileRepository.findFirstByUniqueCode(md5String);
        if(optionalExistsFile.isPresent()){
            return optionalExistsFile.get().url();
        }

        // 计算默认的 path 名
        String type = FileTypeUtils.getMineType(content, name);
        if (StrUtil.isEmpty(path)) {
            path = FileUtils.generatePath(content, name);
        }
        // 如果 name 为空，则使用 path 填充
        if (StrUtil.isEmpty(name)) {
            name = path;
        }

        // 上传到文件存储器
        FileClient client = fileConfigService.getMasterFileClient();
        Assert.notNull(client, "客户端(master) 不能为空");
        String url = client.upload(content, path, type);

        // 保存到数据库
        String finalName = name;
        String finalPath = path;
        InfraFile file = InfraFileDraft.$.produce(draft -> {
            draft.setConfigId(client.getId()).setName(finalName).setPath(finalPath).setUrl(url)
                    .setType(type).setSize(content.length).setUniqueCode(md5String);
        });
        infraFileRepository.insert(file);
        return url;
    }

    @Override
    public void deleteFile(Long id) throws Exception {
        // 校验存在
        InfraFile file = validateFileExists(id);

        // 从文件存储器中删除
        FileClient client = fileConfigService.getFileClient(file.configId());
        Assert.notNull(client, "客户端({}) 不能为空", file.configId());
        client.delete(file.path());

        // 删除记录
        infraFileRepository.deleteById(id);
    }

    private InfraFile validateFileExists(Long id) {
        Optional<InfraFile>  opFileDO = infraFileRepository.findById(id);
        if (!opFileDO.isPresent()) {
            throw exception(FILE_NOT_EXISTS);
        }
        return opFileDO.get();
    }

    @Override
    public byte[] getFileContent(Long configId, String path) throws Exception {
        FileClient client = fileConfigService.getFileClient(configId);
        Assert.notNull(client, "客户端({}) 不能为空", configId);
        return client.getContent(path);
    }

}
