package cn.iocoder.yudao.service.convert.infra.data;

import java.util.*;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.model.infra.job.InfraJob;
import cn.iocoder.yudao.service.vo.infra.data.job.job.JobCreateReqVO;
import cn.iocoder.yudao.service.vo.infra.data.job.job.JobExcelVO;
import cn.iocoder.yudao.service.vo.infra.data.job.job.JobRespVO;
import cn.iocoder.yudao.service.vo.infra.data.job.job.JobUpdateReqVO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * 定时任务 Convert
 */
@Mapper
public interface JobConvert {
    JobConvert INSTANCE = Mappers.getMapper(JobConvert.class);

    InfraJob convert(JobCreateReqVO bean);

    InfraJob convert(JobUpdateReqVO bean);

    JobRespVO convert(InfraJob bean);

    List<JobRespVO> convertList(List<InfraJob> list);

    PageResult<JobRespVO> convertPage(PageResult<InfraJob> page);

    List<JobExcelVO> convertList02(List<InfraJob> list);
}
