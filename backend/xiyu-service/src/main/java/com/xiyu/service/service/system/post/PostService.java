package com.xiyu.service.service.system.post;

import com.xiyu.service.vo.system.post.post.PostImportExcelOutput;
import com.xiyu.service.vo.system.post.post.PostImportExcelInput;
import com.xiyu.service.model.system.dept.SystemPost;
import com.xiyu.service.vo.system.post.post.PostPageOutput;
import com.xiyu.service.vo.system.post.post.PostPageInput;
import com.xiyu.service.vo.system.post.post.PostExportedInput;
import com.xiyu.service.vo.system.post.post.PostListAllSimpleOutput;
import com.xiyu.service.vo.system.post.post.PostGetOutput;
import com.xiyu.service.vo.system.post.post.PostUpdateInput;
import com.xiyu.service.vo.system.post.post.PostCreateInput;
import java.util.*;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 岗位管理 Service 接口
 */
public interface PostService {

    Long create(PostCreateInput inputVO);

    Boolean update(PostUpdateInput inputVO);

    Boolean deleted(Long id);

    PostGetOutput get(Long id);

    List<PostListAllSimpleOutput> listAllSimple();

    void exported(HttpServletResponse response, PostExportedInput inputVO) throws IOException;

    PageResult<PostPageOutput> page(PostPageInput inputVO);

    void validatePostList(Collection<Long> ids);

    List<SystemPost> getPostList(Collection<Long> ids);

    void getImportExcelTemplate(HttpServletResponse response) throws IOException;

    List<PostImportExcelOutput> importExcel(List<PostImportExcelInput> inputVO);

}
