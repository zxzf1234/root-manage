package cn.iocoder.yudao.service.errorCode.infra.data;

import cn.iocoder.yudao.service.framework.exception.ErrorCode;

/**
* job 错误码枚举类
*
* job 定时任务，使用 1002005000段
*/
public interface JobErrorCode {
    Integer ERROR_CODE_START_CODE = 1002005000;

    ErrorCode JOB_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE, "定时任务不存在");
    ErrorCode JOB_HANDLER_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 1, "定时任务的处理器已经存在");
    ErrorCode JOB_CHANGE_STATUS_INVALID = new ErrorCode(ERROR_CODE_START_CODE + 2, "只允许修改为开启或者关闭状态");
    ErrorCode JOB_CHANGE_STATUS_EQUALS = new ErrorCode(ERROR_CODE_START_CODE + 3, "定时任务已经处于该状态，无需修改");
    ErrorCode JOB_UPDATE_ONLY_NORMAL_STATUS = new ErrorCode(ERROR_CODE_START_CODE + 4, "只有开启状态的任务，才可以修改");
    ErrorCode JOB_CRON_EXPRESSION_VALID = new ErrorCode(ERROR_CODE_START_CODE + 5, "CRON 表达式不正确");
}