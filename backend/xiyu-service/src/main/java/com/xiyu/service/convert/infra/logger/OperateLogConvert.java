package com.xiyu.service.convert.infra.logger;

import com.xiyu.service.vo.infra.logger.operatelog.OperateLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogExcelVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogRespVO;
import com.xiyu.service.model.infra.logger.SystemOperateLog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface OperateLogConvert {

    OperateLogConvert INSTANCE = Mappers.getMapper(OperateLogConvert.class);

    SystemOperateLog convert(OperateLogCreateReqVO bean);

    List<OperateLogRespVO> convertPage(List<SystemOperateLog> page);

    @Mapping(source = "user.nickname", target = "userNickname")
    OperateLogRespVO convert(SystemOperateLog bean);

    @Mapping(source = "user.nickname", target = "userNickname")
    OperateLogExcelVO convert02(SystemOperateLog bean);

    List<OperateLogExcelVO> convertList(List<SystemOperateLog> list);



}
