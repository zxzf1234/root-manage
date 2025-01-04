package cn.iocoder.yudao.service.framework.operateLog.core.service;

import cn.hutool.core.bean.BeanUtil;
import cn.iocoder.yudao.service.vo.infra.logger.operatelog.OperateLogCreateReqVO;
import cn.iocoder.yudao.service.service.infra.logger.OperateLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;

import jakarta.annotation.Resource;

/**
 * 操作日志 Framework Service 实现类
 *
 * 基于 {@link OperateLogService} 实现，记录操作日志
 *
 * @author 芋道源码
 */
@RequiredArgsConstructor
public class OperateLogFrameworkServiceImpl implements OperateLogFrameworkService {

    @Resource
    private OperateLogService operateLogService;

    @Override
    @Async
    public void createOperateLog(OperateLog operateLog) {
        OperateLogCreateReqVO reqDTO = BeanUtil.copyProperties(operateLog, OperateLogCreateReqVO.class);
        operateLogService.createOperateLog(reqDTO);
    }

}
