package cn.iocoder.yudao.service.service.system.post;

import org.springframework.web.multipart.MultipartFile;
import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;
import cn.iocoder.yudao.service.vo.system.post.post.PostImportExcelOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostImportExcelInput;
import cn.iocoder.yudao.service.model.system.dept.SystemPost;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostExportedInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostGetOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostUpdateInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostCreateInput;
import java.util.*;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
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
