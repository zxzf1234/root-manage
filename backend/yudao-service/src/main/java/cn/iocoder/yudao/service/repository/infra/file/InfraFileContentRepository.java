package cn.iocoder.yudao.service.repository.infra.file;

import cn.iocoder.yudao.service.model.infra.file.InfraFileContent;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.Optional;

public interface InfraFileContentRepository extends JRepository<InfraFileContent, Long> {
    void deleteByConfigIdAndPath(Long configId, String path);

    Optional<InfraFileContent> findByConfigIdAndPath(Long configId, String path);
}
