package com.xiyu.service.service.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogExportReqVO;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogPageReqVO;
import com.xiyu.service.convert.infra.logger.ApiAccessLogConvert;
import com.xiyu.service.model.infra.data.InfraApiAccessLog;
import com.xiyu.service.repository.infra.data.InfraApiAccessLogRepository;
import org.babyfish.jimmer.Page;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import jakarta.annotation.Resource;
import java.util.List;

/**
 * API 访问日志 Service 实现类
 *
 * @author 芋道源码
 */
@Service
@Validated
public class ApiAccessLogServiceImpl implements ApiAccessLogService {

    @Resource
    private InfraApiAccessLogRepository infraApiAccessLogRepository;

    @Override
    public void createApiAccessLog(ApiAccessLogCreateReqVO createDTO) {
        InfraApiAccessLog apiAccessLog = ApiAccessLogConvert.INSTANCE.convert(createDTO);
        infraApiAccessLogRepository.insert(apiAccessLog);
    }

    @Override
    public PageResult<InfraApiAccessLog> getApiAccessLogPage(ApiAccessLogPageReqVO pageReqVO) {
        Page<InfraApiAccessLog> postPage = infraApiAccessLogRepository.selectPage(pageReqVO);
        return new PageResult<>(postPage.getRows(), postPage.getTotalRowCount());
    }

    @Override
    public List<InfraApiAccessLog> getApiAccessLogList(ApiAccessLogExportReqVO exportReqVO) {
        return infraApiAccessLogRepository.selectList(exportReqVO);
    }

}
