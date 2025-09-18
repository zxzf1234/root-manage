package com.xiyu.service.convert.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogExcelVO;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogRespVO;
import com.xiyu.service.model.infra.data.InfraApiAccessLog;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

/**
 * API 访问日志 Convert
 *
 * @author 芋道源码
 */
@Mapper
public interface ApiAccessLogConvert {

    ApiAccessLogConvert INSTANCE = Mappers.getMapper(ApiAccessLogConvert.class);

    ApiAccessLogRespVO convert(InfraApiAccessLog bean);

    List<ApiAccessLogRespVO> convertList(List<InfraApiAccessLog> list);

    PageResult<ApiAccessLogRespVO> convertPage(PageResult<InfraApiAccessLog> page);

    List<ApiAccessLogExcelVO> convertList02(List<InfraApiAccessLog> list);

    InfraApiAccessLog convert(ApiAccessLogCreateReqVO bean);

}
