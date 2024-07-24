package cn.iocoder.yudao.service.convert.infra.logger;

import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.vo.infra.logger.apierrorlog.ApiErrorLogCreateReqVO;
import cn.iocoder.yudao.service.vo.infra.logger.apierrorlog.ApiErrorLogExcelVO;
import cn.iocoder.yudao.service.vo.infra.logger.apierrorlog.ApiErrorLogRespVO;
import cn.iocoder.yudao.service.model.infra.data.InfraApiErrorLog;
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
