package cn.iocoder.yudao.service.enums.infra.codegen;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
* 升级时需要代码生成的数据库表
*/
@Getter
@AllArgsConstructor
public enum InfraCodegenTableEnum {
    /**
    * 定时任务
    */
    INFRA_JOB("INFRA_JOB"),

    /**
    * blog类型triggers
    */
    QRTZ_BLOB_TRIGGERS("QRTZ_BLOB_TRIGGERS"),
    /**
    * 以 Blob 类型存储 Quartz 的 Calendar 信息
    */
    QRTZ_CALENDARS("QRTZ_CALENDARS"),
    /**
    * 存放cron类型的触发器
    */
    QRTZ_CRON_TRIGGERS("QRTZ_CRON_TRIGGERS"),
    /**
    * 存储已经触发的trigger相关信息
    */
    QRTZ_FIRED_TRIGGERS("QRTZ_FIRED_TRIGGERS"),
    /**
    * 记录每个任务的详细信息
    */
    QRTZ_JOB_DETAILS("QRTZ_JOB_DETAILS"),
    /**
    * 记录程序的悲观锁
    */
    QRTZ_LOCKS("QRTZ_LOCKS"),
    /**
    * 存储已暂停的 Trigger 组的信息
    */
    QRTZ_PAUSED_TRIGGER_GRPS("QRTZ_PAUSED_TRIGGER_GRPS"),
    /**
    * 记录 调度器（每个机器节点）的生命状态
    */
    QRTZ_SCHEDULER_STATE("QRTZ_SCHEDULER_STATE"),
    /**
    * 存储简单的trigger，包括重复次数，间隔，以及触发次数
    */
    QRTZ_SIMPLE_TRIGGERS("QRTZ_SIMPLE_TRIGGERS"),
    /**
    * 存储CalendarIntervalTrigger和DailyTimeIntervalTrigger两种类型的触发器
    */
    QRTZ_SIMPROP_TRIGGERS("QRTZ_SIMPROP_TRIGGERS"),
    /**
    * 记录每个触发器的详细信息
    */
    QRTZ_TRIGGERS("QRTZ_TRIGGERS");


    private final String value;

}
