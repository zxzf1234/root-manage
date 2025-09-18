package com.xiyu.service.service.infra.data;

import com.xiyu.service.util.entity.EntityUtils;
import com.xiyu.service.model.infra.data.*;
import com.xiyu.service.vo.infra.data.dictType.DictDataListAllSimpleOutput;
import com.xiyu.service.vo.infra.data.dictType.DictDataListOutput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeUpdateInput;
import com.xiyu.service.service.infra.codegen.inner.CodegenEngine;
import com.xiyu.service.vo.infra.data.dictType.DictTypeGetOutput;
import com.xiyu.service.vo.infra.data.dictType.DictTypeCreateInput;
import com.xiyu.service.vo.infra.data.dictType.*;
import cn.hutool.core.util.StrUtil;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.repository.infra.data.InfraDictDataRepository;
import com.xiyu.service.repository.infra.data.InfraDictTypeRepository;
import org.babyfish.jimmer.DraftObjects;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;

import java.util.*;

import com.xiyu.service.convert.infra.data.DictTypeConvert;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;
import static com.xiyu.service.errorCode.infra.data.DictTypeErrorCode.*;

/**
 * 字典类型 Service 实现类
 */
@Service
@Validated
public class DictTypeServiceImpl implements DictTypeService {

    @Resource
    private InfraDictTypeRepository infraDictTypeRepository;

    @Resource
    private InfraDictDataRepository infraDictDataRepository;

    @Resource
    private CodegenEngine codegenEngine;


    @Override
    @Transactional(rollbackFor = Exception.class)
    public UUID create(DictTypeCreateInput inputVO) {
        // 校验正确性
        validateDictTypeForCreateOrUpdate(null, inputVO.getName(), inputVO.getType());

        // 插入字典类型
        InfraDictType dictType = DictTypeConvert.INSTANCE.createInputConvert(inputVO);
        dictType = infraDictTypeRepository.insert(dictType);
        codegenEngine.dictInsertExecute(dictType);
        dictType.datas().forEach(data-> codegenEngine.saveInsertSql(data));
        codegenEngine.saveInsertSql(dictType);
        return dictType.id();
    }

    private void validateDictTypeForCreateOrUpdate(UUID id, String name, String type) {
        // 校验自己存在
        validateDictTypeExists(id);
        // 校验字典类型的名字的唯一性
        validateDictTypeNameUnique(id, name);
        // 校验字典类型的类型的唯一性
        validateDictTypeUnique(id, type);
    }

    void validateDictTypeNameUnique(UUID id, String name) {
        Optional<InfraDictType> opDictType = infraDictTypeRepository.findByName(name);
        if (opDictType.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的字典类型
        if (id == null) {
            throw exception(DICT_TYPE_NAME_DUPLICATE);
        }
        if (!opDictType.get().id().equals(id)) {
            throw exception(DICT_TYPE_NAME_DUPLICATE);
        }
    }

    void validateDictTypeUnique(UUID id, String type) {
        if (StrUtil.isEmpty(type)) {
            return;
        }
        Optional<InfraDictType> opDictType = infraDictTypeRepository.findByType(type);
        if (opDictType.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的字典类型
        if (id == null) {
            throw exception(DICT_TYPE_TYPE_DUPLICATE);
        }
        if (!opDictType.get().id().equals(id)) {
            throw exception(DICT_TYPE_TYPE_DUPLICATE);
        }
    }

    void validateDictTypeExists(UUID id) {
        if (id == null) {
            return;
        }
        Optional<InfraDictType> opDictType = infraDictTypeRepository.findById(id);
        if (opDictType.isEmpty()) {
            throw exception(DICT_TYPE_NOT_EXISTS);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean update(DictTypeUpdateInput inputVO) {
        // 校验正确性
        validateDictTypeForCreateOrUpdate(inputVO.getId(), inputVO.getName(), null);
        Optional<InfraDictType> opOldType = infraDictTypeRepository.findById(inputVO.getId());
        if(opOldType.isEmpty())
            throw exception(DICT_TYPE_NOT_EXISTS);
        Optional<InfraDictType> opOldTypeDetail = infraDictTypeRepository.findByDetailId(inputVO.getId());
        if(opOldTypeDetail.isEmpty())
            throw exception(DICT_TYPE_NOT_EXISTS);
        for(DictTypeUpdateInput.data data : inputVO.getDatas()){
            if(Objects.equals(data.getOperateType(), "delete")){
                Optional<InfraDictData> optionalDeleteInfraDictData = infraDictDataRepository.findById(data.getId());
                if(optionalDeleteInfraDictData.isEmpty()){
                    throw exception(DICT_DATA_NOT_EXISTS);
                }
                infraDictDataRepository.deleteById(data.getId(), DeleteMode.PHYSICAL);
                codegenEngine.saveDeleteSql(InfraDictData.class.getName(), data.getId().toString());
            }else if(Objects.equals(data.getOperateType(), "new")){
                Optional<InfraDictData> optionalDuplicateInfraDictData = infraDictDataRepository.findByTypeIdAndValue(data.getTypeId(), data.getValue());
                if(optionalDuplicateInfraDictData.isPresent()){
                    throw exception(DICT_DATA_VALUE_DUPLICATE);
                }
                InfraDictData newData = DictTypeConvert.INSTANCE.updateInputDataConvert(data);
                infraDictDataRepository.insert(newData);
                codegenEngine.saveInsertSql(newData);
            }else {
                Optional<InfraDictData> optionalOldInfraDictData = infraDictDataRepository.findById(data.getId());
                if(optionalOldInfraDictData.isEmpty()) {
                    throw exception(DICT_DATA_NOT_EXISTS);
                }
                Optional<InfraDictData> optionalDuplicateInfraDictData = infraDictDataRepository.findByTypeIdAndValue(data.getTypeId(), data.getValue());
                if(optionalDuplicateInfraDictData.isPresent() && !data.getId().equals(optionalDuplicateInfraDictData.get().id())){
                    throw exception(DICT_DATA_VALUE_DUPLICATE);
                }
                InfraDictData updateInfraDictData = DictTypeConvert.INSTANCE.updateInputDataConvert(data);
                if (!EntityUtils.isEquals(optionalOldInfraDictData.get(), updateInfraDictData)){
                    infraDictDataRepository.update(updateInfraDictData);
                    codegenEngine.saveUpdateSql(updateInfraDictData);
                }

            }
        }

        // 更新字典类型
        InfraDictType updateType = DictTypeConvert.INSTANCE.updateInputConvert(inputVO);
        updateType = InfraDictTypeDraft.$.produce(updateType, draft -> DraftObjects.unload(draft, InfraDictTypeProps.DATAS));
        if (!EntityUtils.isEquals(opOldType.get(), updateType)){
            infraDictTypeRepository.update(updateType);
            codegenEngine.saveUpdateSql(updateType);
        }
        updateType = infraDictTypeRepository.findByDetailId(inputVO.getId()).get();
        codegenEngine.dictUpdateExecute(opOldTypeDetail.get(), updateType);
        return true;
    }

    @Override
    public Boolean delete(UUID id) {
        // 校验是否存在
        validateDictTypeExists(id);
        saveDeletedSql(id);
        infraDictDataRepository.deleteByTypeId(id);
        // 删除字典类型
        infraDictTypeRepository.deleteById(id, DeleteMode.PHYSICAL);
        return true;
    }

    private void saveDeletedSql(UUID id){
        List<InfraDictData> dataList = infraDictDataRepository.findByTypeId(id);
        dataList.forEach(data-> codegenEngine.saveDeleteSql(InfraDictData.class.getName(), data.id().toString()));
        codegenEngine.saveDeleteSql(InfraDictType.class.getName(), id.toString());
    }

    @Override
    public PageResult<DictTypePageOutput> page(DictTypePageInput inputVO) {
        Page<InfraDictType> postPage = infraDictTypeRepository.selectPage(inputVO);
        List<DictTypePageOutput> postList =  DictTypeConvert.INSTANCE.pagePageOutputConvert(postPage.getRows());
        return new PageResult<>(postList, postPage.getTotalRowCount());
    }

    @Override
    public DictTypeGetOutput get(UUID id) {
        return infraDictTypeRepository.findByDetailId(id).map(DictTypeConvert.INSTANCE::getOutputConvert).orElse(null);
    }

    @Override
    public List<DictTypeListAllSimpleOutput> listAllSimple() {
        return DictTypeConvert.INSTANCE.listAllSimpleListOutputConvert(infraDictTypeRepository.findAll());
    }

    @Override
    public List<DictDataListAllSimpleOutput> listAllData() {
        List<InfraDictData> list = infraDictDataRepository.findSimpleList();

        return DictTypeConvert.INSTANCE.listAllDataListOutputConvert(list);
    }

    @Override
    public List<DictDataListOutput> dataList(UUID typeId) {
        List<InfraDictData> dataList = infraDictDataRepository.findByTypeId(typeId);
        return DictTypeConvert.INSTANCE.listListOutputConvert(dataList);
    }


}
