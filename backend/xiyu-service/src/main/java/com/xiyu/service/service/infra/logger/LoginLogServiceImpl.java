package com.xiyu.service.service.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogExportReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogPageReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogRespVO;
import com.xiyu.service.convert.infra.logger.LoginLogConvert;
import com.xiyu.service.model.infra.logger.SystemLoginLog;
import com.xiyu.service.repository.infra.logger.SystemLoginLogRepository;
import org.babyfish.jimmer.Page;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import jakarta.annotation.Resource;
import java.util.List;

/**
 * 登录日志 Service 实现
 */
@Service
@Validated
public class LoginLogServiceImpl implements LoginLogService {

    @Resource
    private SystemLoginLogRepository systemLoginLogRepository;

    @Override
    public PageResult<LoginLogRespVO> getLoginLogPage(LoginLogPageReqVO reqVO) {
        Page<SystemLoginLog> postPage = systemLoginLogRepository.selectPage(reqVO);
        List<LoginLogRespVO> postList = LoginLogConvert.INSTANCE.convertPage(postPage.getRows());
        return new PageResult<>(postList, postPage.getTotalRowCount());
    }

    @Override
    public List<SystemLoginLog> getLoginLogList(LoginLogExportReqVO reqVO) {
        return systemLoginLogRepository.selectList(reqVO);
    }

    @Override
    public void createLoginLog(LoginLogCreateReqVO reqDTO) {
        SystemLoginLog loginLog = LoginLogConvert.INSTANCE.convert(reqDTO);
        systemLoginLogRepository.insert(loginLog);
    }

}
