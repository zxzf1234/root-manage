package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.service.model.infra.data.InfraDictNo;
import cn.iocoder.yudao.service.model.infra.data.InfraDictNoDraft;
import cn.iocoder.yudao.service.repository.infra.data.InfraDictNoRepository;
import cn.iocoder.yudao.service.service.infra.codegen.inner.CodegenEngine;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoCreateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoGetOutput;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;

import java.time.format.DateTimeFormatter;
import java.util.*;

import org.springframework.transaction.annotation.Transactional;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.convert.infra.data.DictNoConvert;

import java.time.LocalDate;

import static cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.infra.data.DictNoErrorCode.*;

/**
 * 字典编号 Service 实现类
 */
@Service
@Validated
public class DictNoServiceImpl implements DictNoService {

    @Resource
    InfraDictNoRepository infraDictNoRepository;

    @Resource
    private CodegenEngine codegenEngine;

    @Override
    public DictNoGetOutput get(String id) {
        Optional<InfraDictNo> opNo = infraDictNoRepository.findById(UUID.fromString(id));
        if(opNo.isPresent()) {
            return DictNoConvert.INSTANCE.getOutputConvert(opNo.get());
        }
        else {
            throw exception(DICT_NO_NOT_EXISTS);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String create(DictNoCreateInput inputVO) {
        InfraDictNo newNo = DictNoConvert.INSTANCE.createInputConvert(inputVO);
        if(infraDictNoRepository.findByKeyName(newNo.keyName()).isPresent())
            throw exception(DICT_NO_EXISTS);
        newNo = InfraDictNoDraft.$.produce(newNo, draft -> {
            draft.setLastDate(LocalDate.now().atStartOfDay()).setPostfixVal(0);
        });
        newNo = infraDictNoRepository.insert(newNo);
        codegenEngine.saveInsertSql(newNo);
        return newNo.id().toString();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String update(DictNoUpdateInput inputVO) {
        InfraDictNo updateNo = DictNoConvert.INSTANCE.updateInputConvert(inputVO);
        if(infraDictNoRepository.findByKeyName(updateNo.keyName()).isPresent())
            throw exception(DICT_NO_EXISTS);
        infraDictNoRepository.update(updateNo);
        codegenEngine.saveUpdateSql(updateNo);
        return updateNo.id().toString();
    }

    @Override
    public PageResult<DictNoQueryOutput> query(DictNoQueryInput inputVO) {
        Page<InfraDictNo> pageNo = infraDictNoRepository.query(inputVO);
        List<DictNoQueryOutput> listNo = DictNoConvert.INSTANCE.queryPageOutputConvert(pageNo.getRows());
        return new PageResult<>(listNo, pageNo.getTotalRowCount());
    }

    @Override
    public String produceNo(String keyName){
       Optional<InfraDictNo> opNo =  infraDictNoRepository.findByKeyNameUpdate(keyName);
       if (!opNo.isPresent())
           return null;

       InfraDictNo updateNo = InfraDictNoDraft.$.produce(opNo.get(), draft -> {
            draft.setPostfixVal(
                    draft.lastDate().equals(
                            LocalDate.now().atStartOfDay()) ||draft.dateForm()== 2 ?
                            draft.postfixVal() + 1: 1)
                    .setLastDate(LocalDate.now().atStartOfDay());
        });
       infraDictNoRepository.update(updateNo);
        String postfixStr;
       if(updateNo.postfixVal().toString().length()  > updateNo.postfixVal())
            postfixStr = updateNo.postfixVal().toString();
       else
            postfixStr = String.format("%0"+updateNo.postfixLen()+"d", updateNo.postfixVal());
        if(updateNo.dateForm() == 0)
            return updateNo.prefix() + LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")) + postfixStr;
        else
            return updateNo.prefix() + LocalDate.now().format(DateTimeFormatter.ofPattern("yyMMdd")) + postfixStr;
    }

}
