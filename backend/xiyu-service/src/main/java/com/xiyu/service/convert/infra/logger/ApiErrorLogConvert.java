package com.xiyu.service.convert.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.apierrorlog.ApiErrorLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.apierrorlog.ApiErrorLogExcelVO;
import com.xiyu.service.vo.infra.logger.apierrorlog.ApiErrorLogRespVO;
import com.xiyu.service.model.infra.data.InfraApiErrorLog;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

/**
 * API 错误日志 Convert
 *
 * @author 芋道源码
 */
@Mapper
public interface ApiErrorLogConvert {

    ApiErrorLogConvert INSTANCE = Mappers.getMapper(ApiErrorLogConvert.class);

    ApiErrorLogRespVO convert(InfraApiErrorLog bean);

    PageResult<ApiErrorLogRespVO> convertPage(PageResult<InfraApiErrorLog> page);

    List<ApiErrorLogExcelVO> convertList02(List<InfraApiErrorLog> list);

    InfraApiErrorLog convert(ApiErrorLogCreateReqVO bean);

}
