package cn.iocoder.yudao.service.service.infra.data;

import cn.hutool.core.date.DateUtil;
import cn.iocoder.yudao.service.model.infra.data.InfraDictNo;
import cn.iocoder.yudao.service.model.infra.data.InfraDictNoDraft;
import cn.iocoder.yudao.service.repository.infra.data.InfraDictNoRepository;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoCreateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoGetOutput;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.*;
import javax.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.convert.infra.data.DictNoConvert;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.*;
import java.time.LocalDate;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.enums.infra.ErrorCodeConstants.*;

/**
 * 字典编号 Service 实现类
 */
@Service
@Validated
public class DictNoServiceImpl implements DictNoService {

    @Resource
    InfraDictNoRepository infraDictNoRepository;

    @Override
    public DictNoGetOutput get(String id) {
        return null;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String create(DictNoCreateInput inputVO) {
        InfraDictNo newNo = DictNoConvert.INSTANCE.createInputConvert(inputVO);
        newNo = InfraDictNoDraft.$.produce(newNo, draft -> {
            draft.setLastDate(LocalDate.now().atStartOfDay()).setPostfixVal(1);
        });
        newNo = infraDictNoRepository.insert(newNo);
        return newNo.id().toString();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(DictNoUpdateInput inputVO) {
        InfraDictNo updateNo = DictNoConvert.INSTANCE.updateInputConvert(inputVO);
        infraDictNoRepository.update(updateNo);
    }

    @Override
    public PageResult<DictNoQueryOutput> query(DictNoQueryInput inputVO) {
        Page<InfraDictNo> pageNo = infraDictNoRepository.query(inputVO);
        List<DictNoQueryOutput> listNo = DictNoConvert.INSTANCE.queryPageOutputConvert(pageNo);
        return new PageResult<>(listNo, pageNo.getTotalElements());
    }

}
