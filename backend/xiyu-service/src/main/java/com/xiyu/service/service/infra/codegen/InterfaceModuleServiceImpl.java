package com.xiyu.service.service.infra.codegen;

import com.xiyu.service.convert.infra.codegen.CodegenConvert;
import com.xiyu.service.model.infra.codegen.InfraInterfaceModule;
import com.xiyu.service.model.infra.codegen.InfraInterfaceModuleDraft;
import com.xiyu.service.repository.infra.codegen.InfraInterfaceModuleRepository;
import com.xiyu.service.service.infra.codegen.inner.CodegenEngine;
import com.xiyu.service.vo.infra.codegen.interfaceModule.*;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.annotation.Resource;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;
import static com.xiyu.service.errorCode.infra.ErrorCodeConstants.*;

@Service
public class InterfaceModuleServiceImpl implements InterfaceModuleService{

    @Resource
    InfraInterfaceModuleRepository infraInterfaceModuleRepository;

    @Resource
    private CodegenEngine codegenEngine;

    @Override
    public List<InterfaceModuleResp> getModuleList(InterfaceModuleListReqVO reqVO){
        List<InfraInterfaceModule> moduleList = infraInterfaceModuleRepository.selectList(reqVO);
        return CodegenConvert.INSTANCE.convertList10(moduleList);
    }

    @Override
    public List<InterfaceModuleSimpleRespVO> getSimpleModuleList(){
        List<InfraInterfaceModule> moduleList = infraInterfaceModuleRepository.selectSimpleList();
        return CodegenConvert.INSTANCE.convertList11(moduleList);
    }

    private InfraInterfaceModule findSecondParent(InfraInterfaceModule module){
        if(module == null)
            return null;
        else{
            if(module.parentId().equals("5aa5cea6-8dbe-47b3-8cfa-02c10c39bc12") || module.parentId().equals("a7de2f1c-278b-4b94-9a74-1bd708f289ed")){
                return module;
            }else{
                Optional<InfraInterfaceModule> optionalModule = infraInterfaceModuleRepository.findById(UUID.fromString(module.parentId()));
                return optionalModule.map(this::findSecondParent).orElse(null);
            }
        }
    }


    @Override
    @Transactional(rollbackFor = Exception.class)
    public String create(InterfaceModuleCreateReq reqVO){
        InfraInterfaceModule module = CodegenConvert.INSTANCE.convert(reqVO);
        // 新建的时候自动生成排序，逻辑是 1 admin或app的下一级会有排序 2 模块类型会有排序 模块类型排序序号是计算system、infra这一级下已经有多少个模块类型的接口模块
        Optional<InfraInterfaceModule> optionalParentModule = infraInterfaceModuleRepository.findById(UUID.fromString(module.parentId()));
        if(optionalParentModule.isPresent())
        {
            if (module.type() == 1){
                InfraInterfaceModule secondParentModule = findSecondParent(optionalParentModule.get());
                Long count = infraInterfaceModuleRepository.countByTypeAndSort(1, secondParentModule.sort(), secondParentModule.sort() + 1000000);
                module = InfraInterfaceModuleDraft.$.produce(module, draft -> draft.setSort(secondParentModule.sort() + (count + 1) * 1000L));
            }

            if(optionalParentModule.get().id().toString().equals("5aa5cea6-8dbe-47b3-8cfa-02c10c39bc12") || optionalParentModule.get().id().toString().equals("a7de2f1c-278b-4b94-9a74-1bd708f289ed")) {
                int count = infraInterfaceModuleRepository.countByParentId(module.parentId());
                module = InfraInterfaceModuleDraft.$.produce(module, draft -> draft.setSort(optionalParentModule.get().sort() + (count + 1) * 1000000L));
            }
        }
        module = infraInterfaceModuleRepository.insert(module);
        codegenEngine.saveInsertSql(module);
        if(module.type() == 1)
            codegenEngine.moduleInsertExecute(module);
        return module.id().toString();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String update(InterfaceModuleUpdateReq reqVO){
        Optional<InfraInterfaceModule> opModule = infraInterfaceModuleRepository.findById(reqVO.getId());
        if (opModule.isEmpty())
            throw exception(CODEGEN_INTERFACE_MODULE_NOT_EXITS);
        InfraInterfaceModule oldModule = opModule.get();


        // 排序校验，逻辑是 1 admin或app的下一级排序不能为空，并且排序有范围限制 2 模块类型会有排序 模块类型排序序号范围不能超过system、infra这一级
        Optional<InfraInterfaceModule> optionalParentModule = infraInterfaceModuleRepository.findById(UUID.fromString(reqVO.getParentId()));
        if(optionalParentModule.isPresent()){
            if(optionalParentModule.get().id().toString().equals("5aa5cea6-8dbe-47b3-8cfa-02c10c39bc12") || optionalParentModule.get().id().toString().equals("a7de2f1c-278b-4b94-9a74-1bd708f289ed")) {
                if(reqVO.getSort() < optionalParentModule.get().sort() || reqVO.getSort() >= optionalParentModule.get().sort() + 1000000000){
                    throw exception(CODEGEN_INTERFACE_MODULE_RANGE_ILLEGALITY, optionalParentModule.get().sort(), optionalParentModule.get().sort() + 1000000000);
                }
                if (reqVO.getSort() % 1000000  > 0){
                    throw exception(CODEGEN_INTERFACE_MODULE_RANGE_MOD, 1000000);
                }
            }

            if (reqVO.getType() == 1){
                InfraInterfaceModule secondParentModule = findSecondParent(optionalParentModule.get());
                if(reqVO.getSort() < secondParentModule.sort() || reqVO.getSort() >= secondParentModule.sort() + 1000000){
                    throw exception(CODEGEN_INTERFACE_MODULE_RANGE_ILLEGALITY, secondParentModule.sort(), secondParentModule.sort() + 1000000);
                }
                if (reqVO.getSort() % 1000  > 0){
                    throw exception(CODEGEN_INTERFACE_MODULE_RANGE_MOD, 1000);
                }
            }
        }

        InfraInterfaceModule newModule = infraInterfaceModuleRepository.update(CodegenConvert.INSTANCE.convert(reqVO));
        codegenEngine.saveUpdateSql(newModule);
        if(!Objects.equals(oldModule.type(), newModule.type()))
            throw exception(CODEGEN_INTERFACE_MODULE_TYPE_NOT_CHANGE);

        if(oldModule.type() == 1)
            codegenEngine.moduleUpdateExecute(oldModule, newModule);

        return newModule.id().toString();
    }

    @Override
    public InterfaceModuleResp getModule(String id){
        Optional<InfraInterfaceModule> opModule = infraInterfaceModuleRepository.findById(UUID.fromString(id));
        if (opModule.isEmpty())
            throw exception(CODEGEN_INTERFACE_MODULE_NOT_EXITS);
        InfraInterfaceModule module = opModule.get();
        return CodegenConvert.INSTANCE.convert(module);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteModule(String id){
        int count = infraInterfaceModuleRepository.countByParentId(id);
        if(count > 0)
            throw exception(CODEGEN_INTERFACE_MODULE_CHILD_NODE_EXITS);
        Optional<InfraInterfaceModule> opModule = infraInterfaceModuleRepository.findById(UUID.fromString(id));
        if (opModule.isEmpty())
            throw exception(CODEGEN_INTERFACE_MODULE_NOT_EXITS);
        InfraInterfaceModule module = opModule.get();
        if(module.type() == 1)
            codegenEngine.moduleDeleteExecute(module);
        infraInterfaceModuleRepository.deleteById(UUID.fromString(id), DeleteMode.PHYSICAL);
        codegenEngine.saveDeleteSql(InfraInterfaceModule.class.getName(), id);
    }
}
