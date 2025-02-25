package cn.iocoder.yudao.service.service.system.post;

import org.springframework.web.multipart.MultipartFile;
import cn.iocoder.yudao.service.vo.system.post.post.PostImportExcelOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostImportExcelInput;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;
import cn.iocoder.yudao.service.convert.system.post.PostConvert;
import cn.iocoder.yudao.service.model.system.dept.SystemPost;
import cn.iocoder.yudao.service.repository.system.dept.SystemPostRepository;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostExportedOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostExportedInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostGetOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostUpdateInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostCreateInput;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;
import java.util.*;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.hutool.core.collection.CollUtil;
import static cn.iocoder.yudao.service.util.collection.CollectionUtils.convertMap;

import static cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.system.post.PostErrorCode.*;
import static cn.iocoder.yudao.service.util.collection.SetUtils.asSet;

/**
 * 岗位管理 Service 实现类
 */
@Service
@Validated
public class PostServiceImpl implements PostService {

    @Resource
    private SystemPostRepository systemPostRepository;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(PostCreateInput inputVO) {
        // 校验正确性
        validatePostForCreateOrUpdate(null, inputVO.getName(), inputVO.getCode());

        // 插入岗位
        SystemPost post = PostConvert.INSTANCE.createInputConvert(inputVO);
        post = systemPostRepository.insert(post);
        return post.id();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean update(PostUpdateInput inputVO) {
        // 校验正确性
        validatePostForCreateOrUpdate(inputVO.getId(), inputVO.getName(), inputVO.getCode());

        // 更新岗位
        SystemPost updateObj = PostConvert.INSTANCE.updateInputConvert(inputVO);
        systemPostRepository.update(updateObj);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean deleted(Long id) {
        // 校验是否存在
        validatePostExists(id);
        // 删除部门
        systemPostRepository.deleteById(id);
        return true;
    }

    @Override
    public PostGetOutput get(Long id) {
        Optional<SystemPost> opPost = systemPostRepository.findById(id);
        if(opPost.isEmpty()){
            throw exception(POST_NOT_FOUND);
        }
        return PostConvert.INSTANCE.getOutputConvert(opPost.get());
    }

    @Override
    public List<PostListAllSimpleOutput> listAllSimple() {
        // 获得岗位列表，只要开启状态的
        List<SystemPost> list = systemPostRepository.findByIdInAndStatusIn(null, Collections.singleton(CommonStatusEnum.ENABLE.getValue()));
        // 排序后，返回给前端
        list.sort(Comparator.comparing(SystemPost::sort));
        return PostConvert.INSTANCE.listAllSimpleOutputConvert(list);
    }

    @Override
    public void exported(HttpServletResponse response, PostExportedInput inputVO) throws IOException {
        List<SystemPost> posts = systemPostRepository.selectList(inputVO);
        List<PostExportedOutput> data = PostConvert.INSTANCE.exportedOutPutConvert(posts);
        // 输出
        ExcelUtils.write(response, "岗位数据.xls", "岗位列表", PostExportedOutput.class, data);
    }

    @Override
    public PageResult<PostPageOutput> page(PostPageInput inputVO) {
        Page<SystemPost> postPage = systemPostRepository.selectPage(inputVO);
        List<PostPageOutput> postList =  PostConvert.INSTANCE.pagePageOutputConvert(postPage.getRows());
        return new PageResult<>(postList, postPage.getTotalRowCount());
    }

    private void validatePostForCreateOrUpdate(Long id, String name, String code) {
        // 校验自己存在
        validatePostExists(id);
        // 校验岗位名的唯一性
        validatePostNameUnique(id, name);
        // 校验岗位编码的唯一性
        validatePostCodeUnique(id, code);
    }

    private void validatePostExists(Long id) {
        if (id == null) {
            return;
        }
        if (systemPostRepository.findById(id).isEmpty()) {
            throw exception(POST_NOT_FOUND);
        }
    }

    private void validatePostNameUnique(Long id, String name) {
        Optional<SystemPost> opPost = systemPostRepository.findByName(name);
        if (opPost.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的岗位
        if (id == null) {
            throw exception(POST_NAME_DUPLICATE);
        }
        if (opPost.get().id() != id) {
            throw exception(POST_NAME_DUPLICATE);
        }
    }

    private void validatePostCodeUnique(Long id, String code) {
        Optional<SystemPost> opPost = systemPostRepository.findByCode(code);
        if (opPost.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的岗位
        if (id == null) {
            throw exception(POST_CODE_DUPLICATE);
        }
        if (opPost.get().id() != id) {
            throw exception(POST_CODE_DUPLICATE);
        }
    }

    @Override
    public void validatePostList(Collection<Long> ids) {
        if (CollUtil.isEmpty(ids)) {
            return;
        }
        // 获得岗位信息
        List<SystemPost> posts = systemPostRepository.findByIds(ids);
        Map<Long, SystemPost> postMap = convertMap(posts, SystemPost::id);
        // 校验
        ids.forEach(id -> {
            SystemPost post = postMap.get(id);
            if (post == null) {
                throw exception(POST_NOT_FOUND);
            }
            if (!CommonStatusEnum.ENABLE.getValue().equals(post.status())) {
                throw exception(POST_NOT_ENABLE, post.name());
            }
        });
    }

    @Override
    public List<SystemPost> getPostList(Collection<Long> ids) {
        return systemPostRepository.findByIdInAndStatusIn(ids, asSet(CommonStatusEnum.ENABLE.getValue(), CommonStatusEnum.DISABLED.getValue()));
    }

    @Override
    public void getImportExcelTemplate(HttpServletResponse response) throws IOException {
        ExcelUtils.write(response, "岗位导入模板.xls", "岗位导入", PostImportExcelInput.class, null);
    };

    @Override
    public List<PostImportExcelOutput> importExcel(List<PostImportExcelInput> inputVO) {
        return null;
    }

}
