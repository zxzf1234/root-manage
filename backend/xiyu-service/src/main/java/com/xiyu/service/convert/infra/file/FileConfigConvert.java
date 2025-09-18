package com.xiyu.service.convert.infra.file;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.file.config.FileConfigCreateReqVO;
import com.xiyu.service.vo.infra.file.config.FileConfigRespVO;
import com.xiyu.service.vo.infra.file.config.FileConfigUpdateReqVO;
import com.xiyu.service.model.infra.file.InfraFileConfig;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

/**
 * 文件配置 Convert
 *
 * @author 芋道源码
 */
@Mapper
public interface FileConfigConvert {

    FileConfigConvert INSTANCE = Mappers.getMapper(FileConfigConvert.class);

    @Mapping(target = "config", ignore = true)
    InfraFileConfig convert(FileConfigCreateReqVO bean);

    @Mapping(target = "config", ignore = true)
    InfraFileConfig convert(FileConfigUpdateReqVO bean);

    FileConfigRespVO convert(InfraFileConfig bean);

    List<FileConfigRespVO> convertList(List<InfraFileConfig> list);

    PageResult<FileConfigRespVO> convertPage(PageResult<InfraFileConfig> page);

}
