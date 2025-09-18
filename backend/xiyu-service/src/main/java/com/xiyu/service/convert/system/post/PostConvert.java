package com.xiyu.service.convert.system.post;

import com.xiyu.service.vo.system.post.post.PostImportExcelInput;
import com.xiyu.service.vo.system.post.post.PostPageOutput;
import com.xiyu.service.vo.system.post.post.PostExportedOutput;
import com.xiyu.service.vo.system.post.post.PostListAllSimpleOutput;
import com.xiyu.service.vo.system.post.post.PostGetOutput;
import com.xiyu.service.vo.system.post.post.PostUpdateInput;
import com.xiyu.service.vo.system.post.post.PostCreateInput;
import com.xiyu.service.model.system.dept.SystemPost;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

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
