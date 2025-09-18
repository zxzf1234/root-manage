package com.xiyu.service.convert.infra.data;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.data.job.log.JobLogExcelVO;
import com.xiyu.service.vo.infra.data.job.log.JobLogRespVO;
import com.xiyu.service.model.infra.job.InfraJobLog;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

/**
 * 定时任务日志 Convert
 *
 * @author 芋艿
 */
@Mapper
public interface JobLogConvert {

    JobLogConvert INSTANCE = Mappers.getMapper(JobLogConvert.class);

    JobLogRespVO convert(InfraJobLog bean);

    List<JobLogRespVO> convertList(List<InfraJobLog> list);

    PageResult<JobLogRespVO> convertPage(PageResult<InfraJobLog> page);

    List<JobLogExcelVO> convertList02(List<InfraJobLog> list);

}
