package com.xiyu.service.repository.system.dept;

import com.xiyu.service.model.system.dept.SystemPost;
import com.xiyu.service.model.system.dept.SystemPostTable;
import com.xiyu.service.vo.system.post.post.PostExportedInput;
import com.xiyu.service.vo.system.post.post.PostPageInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface SystemPostRepository extends JRepository<SystemPost, Long> {
    SystemPostTable systemPostTable = SystemPostTable.$;
    default Page<SystemPost> selectPage(PostPageInput reqVO){
        return sql()
                .createQuery(systemPostTable)
                .where(systemPostTable.code().likeIf(reqVO.getCode()))
                .where(systemPostTable.name().likeIf(reqVO.getName()))
                .where(systemPostTable.status().eqIf(reqVO.getStatus()))
                .select(systemPostTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<SystemPost> selectList(PostExportedInput reqVO){
        return sql()
                .createQuery(systemPostTable)
                .where(systemPostTable.code().likeIf(reqVO.getCode()))
                .where(systemPostTable.name().likeIf(reqVO.getName()))
                .where(systemPostTable.status().eqIf(reqVO.getStatus()))
                .select(systemPostTable).execute();
    }

    Optional<SystemPost> findByName(String name);

    Optional<SystemPost> findByCode(String code);

    List<SystemPost> findByIdInAndStatusIn(Collection<Long> ids, Collection<Integer> statuses);
}
