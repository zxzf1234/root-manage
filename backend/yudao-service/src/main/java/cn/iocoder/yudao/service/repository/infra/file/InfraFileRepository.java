package cn.iocoder.yudao.service.repository.infra.file;

import cn.iocoder.yudao.service.vo.infra.file.file.FilePageReqVO;
import cn.iocoder.yudao.service.model.infra.file.InfraFile;
import cn.iocoder.yudao.service.model.infra.file.InfraFileTable;
import org.babyfish.jimmer.Page;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

public interface InfraFileRepository extends JRepository<InfraFile, Long> {
    InfraFileTable infraFileTable = InfraFileTable.$;

    default Page<InfraFile> selectPage(FilePageReqVO reqVO){
        return sql().createQuery(infraFileTable)
                .where(infraFileTable.path().eqIf(reqVO.getPath()))
                .where(infraFileTable.type().eqIf(reqVO.getType()))
                .whereIf(reqVO.getCreateTime() != null, ()-> infraFileTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .orderBy(infraFileTable.createTime().desc())
                .select(infraFileTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<InfraFile> findByUrls(List<String> urls){
        return sql().createQuery(infraFileTable)
                .where(infraFileTable.url().in(urls))
                .select(infraFileTable).execute();
    }

    Optional<InfraFile> findFirstByUniqueCode(String uniqueCode);

    Optional<InfraFile> findFirstByUrl(String url);
}
