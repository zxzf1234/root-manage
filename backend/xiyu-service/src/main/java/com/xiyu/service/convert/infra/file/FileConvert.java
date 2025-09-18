package com.xiyu.service.convert.infra.file;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.file.file.FileRespVO;
import com.xiyu.service.model.infra.file.InfraFile;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface FileConvert {

    FileConvert INSTANCE = Mappers.getMapper(FileConvert.class);

    FileRespVO convert(InfraFile bean);

    PageResult<FileRespVO> convertPage(PageResult<InfraFile> page);

}
