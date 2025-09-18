package com.xiyu.service.convert.infra.logger;

import com.xiyu.service.vo.infra.logger.loginlog.LoginLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogExcelVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogRespVO;
import com.xiyu.service.model.infra.logger.SystemLoginLog;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface LoginLogConvert {

    LoginLogConvert INSTANCE = Mappers.getMapper(LoginLogConvert.class);

    List<LoginLogRespVO> convertPage(List<SystemLoginLog> page);

    List<LoginLogExcelVO> convertList(List<SystemLoginLog> list);

    SystemLoginLog convert(LoginLogCreateReqVO bean);

}
