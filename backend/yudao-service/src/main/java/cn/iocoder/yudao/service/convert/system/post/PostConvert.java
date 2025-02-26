package cn.iocoder.yudao.service.convert.system.post;

import cn.iocoder.yudao.service.vo.system.post.post.PostImportExcelOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostImportExcelInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostExportedOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostExportedInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostGetOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostUpdateInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostCreateInput;
import cn.iocoder.yudao.service.model.system.dept.SystemPost;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.babyfish.jimmer.Page;
import cn.iocoder.yudao.service.vo.system.post.post.*;

/**
 * 岗位管理 Convert
 */
@Mapper
public interface PostConvert {
    PostConvert INSTANCE = Mappers.getMapper(PostConvert.class);


    SystemPost createInputConvert(PostCreateInput input);

    SystemPost updateInputConvert(PostUpdateInput input);

    PostGetOutput getOutputConvert(SystemPost output);

    List<PostPageOutput> pagePageOutputConvert(List<SystemPost> output);

    List<PostListAllSimpleOutput> listAllSimpleOutputConvert(List<SystemPost> output);

    List<PostExportedOutput> exportedOutPutConvert(List<SystemPost> output);

    SystemPost ImportExcelInputConvert(PostImportExcelInput input);

}
