package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.framework.common.util.entity.EntityUtils;
import cn.iocoder.yudao.service.convert.infra.data.DictDataConvert;
import cn.iocoder.yudao.service.model.infra.data.*;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeUpdateInput;
import cn.iocoder.yudao.service.service.infra.codegen.inner.CodegenEngine;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeGetOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeCreateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.*;
import cn.hutool.core.util.StrUtil;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.repository.infra.data.InfraDictDataRepository;
import cn.iocoder.yudao.service.repository.infra.data.InfraDictTypeRepository;
import org.babyfish.jimmer.DraftObjects;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.ast.mutation.SaveMode;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import cn.iocoder.yudao.framework.excel.core.util.ExcelUtils;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;

import java.io.IOException;
import java.util.*;

import cn.iocoder.yudao.service.convert.infra.data.DictTypeConvert;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.enums.infra.ErrorCodeConstants.*;

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
        if (!opDictType.isPresent()) {
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
        if (!opDictType.isPresent()) {
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
        if (!opDictType.isPresent()) {
            throw exception(DICT_TYPE_NOT_EXISTS);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean update(DictTypeUpdateInput inputVO) {
        // 校验正确性
        validateDictTypeForCreateOrUpdate(inputVO.getId(), inputVO.getName(), null);
        Optional<InfraDictType> opOldType = infraDictTypeRepository.findById(inputVO.getId());
        if(!opOldType.isPresent())
            throw exception(DICT_TYPE_NOT_EXISTS);
        for(DictTypeUpdateInput.data data : inputVO.getDatas()){
            if(Objects.equals(data.getOperateType(), "delete")){
                Optional<InfraDictData> optionalDeleteInfraDictData = infraDictDataRepository.findById(data.getId());
                if(!optionalDeleteInfraDictData.isPresent()){
                    throw exception(DICT_DATA_NOT_EXISTS);
                }
                infraDictDataRepository.deleteById(data.getId());
            }else if(Objects.equals(data.getOperateType(), "new")){
                Optional<InfraDictData> optionalDuplicateInfraDictData = infraDictDataRepository.findByTypeIdAndValue(data.getTypeId(), data.getValue());
                if(optionalDuplicateInfraDictData.isPresent()){
                    throw exception(DICT_DATA_VALUE_DUPLICATE);
                }
                InfraDictData newData = DictTypeConvert.INSTANCE.updateInputDataConvert(data);
                infraDictDataRepository.insert(newData);
            }else {
                Optional<InfraDictData> optionalOldInfraDictData = infraDictDataRepository.findById(data.getId());
                if(!optionalOldInfraDictData.isPresent()) {
                    throw exception(DICT_DATA_NOT_EXISTS);
                }
                Optional<InfraDictData> optionalDuplicateInfraDictData = infraDictDataRepository.findByTypeIdAndValue(data.getTypeId(), data.getValue());
                if(optionalDuplicateInfraDictData.isPresent() && !data.getId().equals(optionalDuplicateInfraDictData.get().id())){
                    throw exception(DICT_DATA_VALUE_DUPLICATE);
                }
                InfraDictData updateInfraDictData = DictTypeConvert.INSTANCE.updateInputDataConvert(data);
                if (!EntityUtils.isEquals(optionalOldInfraDictData.get(), updateInfraDictData))
                    infraDictDataRepository.update(updateInfraDictData);
            }
        }

        // 更新字典类型
        InfraDictType updateType = DictTypeConvert.INSTANCE.updateInputConvert(inputVO);
        updateType = InfraDictTypeDraft.$.produce(updateType, draft -> {
            DraftObjects.unload(draft, InfraDictTypeProps.DATAS);
        });
        if (!EntityUtils.isEquals(opOldType.get(), updateType))
            infraDictTypeRepository.update(updateType);
        updateType = infraDictTypeRepository.findById(inputVO.getId()).get();
        codegenEngine.dictUpdateExecute(opOldType.get(), updateType);
        return true;
    }

    @Override
    public Boolean delete(UUID id) {
        // 校验是否存在
        validateDictTypeExists(id);
        infraDictDataRepository.deleteByTypeId(id);

        // 删除字典类型
        infraDictTypeRepository.deleteById(id);
        return true;
    }

    @Override
    public PageResult<DictTypePageOutput> page(DictTypePageInput inputVO) {
        Page<InfraDictType> postPage = infraDictTypeRepository.selectPage(inputVO);
        List<DictTypePageOutput> postList =  DictTypeConvert.INSTANCE.pagePageOutputConvert(postPage);
        return new PageResult<>(postList, postPage.getTotalElements());
    }

    @Override
    public DictTypeGetOutput get(UUID id) {
        return infraDictTypeRepository.findById(id).map(DictTypeConvert.INSTANCE::getOutputConvert).orElse(null);
    }

    @Override
    public List<DictTypeListAllSimpleOutput> listAllSimple() {
        return DictTypeConvert.INSTANCE.listAllSimpleListOutputConvert(infraDictTypeRepository.findAll());
    }

    @Override
    public void export(HttpServletResponse response, DictTypeExportInput inputVO) {
        List<InfraDictType> list = infraDictTypeRepository.selectList(inputVO);
        List<DictTypeExcelOutput> data = DictTypeConvert.INSTANCE.listExportOutputConvert(list);
        try {
            ExcelUtils.write(response, "字典类型.xls", "类型列表", DictTypeExcelOutput.class, data);
        }
        catch (IOException e){
            throw exception(DICT_TYPE_EXPORT_EXCEPTION);
        }
    }

}
