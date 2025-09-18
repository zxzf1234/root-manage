package com.xiyu.service.service.infra.data;

import com.xiyu.service.model.infra.data.InfraDictNo;
import com.xiyu.service.model.infra.data.InfraDictNoDraft;
import com.xiyu.service.repository.infra.data.InfraDictNoRepository;
import com.xiyu.service.service.infra.codegen.inner.CodegenEngine;
import com.xiyu.service.vo.infra.data.dictNo.DictNoQueryOutput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoQueryInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoUpdateInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoCreateInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoGetOutput;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import org.springframework.transaction.annotation.Transactional;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.convert.infra.data.DictNoConvert;

import java.time.LocalDate;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;
import static com.xiyu.service.errorCode.infra.data.DictNoErrorCode.*;

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
        newNo = InfraDictNoDraft.$.produce(newNo, draft -> draft.setLastDate(LocalDate.now().atStartOfDay()).setPostfixVal(0));
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
        if (opNo.isEmpty())
           return null;

        Integer postfixVal = Objects.equals(opNo.get().lastDate(), LocalDate.now().atStartOfDay()) || opNo.get().dateForm()== 2 ?
                opNo.get().postfixVal() + 1: 1;
        LocalDateTime lastDate = LocalDate.now().atStartOfDay();
//        InfraDictNo updateNo = InfraDictNoDraft.$.produce(opNo.get(), draft -> draft.setPostfixVal(
//               Objects.equals(draft.lastDate(), LocalDate.now().atStartOfDay()) ||draft.dateForm()== 2 ?
//                       draft.postfixVal() + 1: 1)
//               .setLastDate(LocalDate.now().atStartOfDay()));
//        infraDictNoRepository.update(updateNo);
        infraDictNoRepository.updateProductNo(opNo.get().id(), postfixVal, lastDate);
        String postfixStr;
        if(postfixVal.toString().length() > opNo.get().postfixLen())
            postfixStr = postfixVal.toString();
        else
            postfixStr = String.format("%0"+opNo.get().postfixLen()+"d", postfixVal);
        if(opNo.get().dateForm() == 0)
            return opNo.get().prefix() + LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")) + postfixStr;
        else
            return opNo.get().prefix() + LocalDate.now().format(DateTimeFormatter.ofPattern("yyMMdd")) + postfixStr;
    }

}
