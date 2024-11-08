package cn.iocoder.yudao.service.repository.infra.file;

import cn.iocoder.yudao.service.vo.infra.file.file.FilePageReqVO;
import cn.iocoder.yudao.service.model.infra.file.InfraFile;
import cn.iocoder.yudao.service.model.infra.file.InfraFileTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

public interface InfraFileRepository extends JRepository<InfraFile, Long> {
    InfraFileTable infraFileTable = InfraFileTable.$;

    default Page<InfraFile> selectPage(FilePageReqVO reqVO){
        return sql().createQuery(infraFileTable)
                .where(infraFileTable.path().eqIf(reqVO.getPath()))
                .where(infraFileTable.type().eqIf(reqVO.getType()))
                .whereIf(reqVO.getCreateTime() != null, ()-> infraFileTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(infraFileTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }
}
