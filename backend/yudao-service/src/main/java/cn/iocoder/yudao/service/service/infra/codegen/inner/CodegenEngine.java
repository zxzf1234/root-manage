package cn.iocoder.yudao.service.service.infra.codegen.inner;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.map.MapUtil;
import cn.hutool.core.util.RuntimeUtil;
import cn.hutool.extra.template.TemplateConfig;
import cn.hutool.extra.template.TemplateEngine;
import cn.hutool.extra.template.engine.velocity.VelocityEngine;
import cn.iocoder.yudao.service.convert.infra.codegen.CodegenConvert;
import cn.iocoder.yudao.service.enums.infra.codegen.CodegenSceneEnum;
import cn.iocoder.yudao.service.framework.codegen.config.SchemaHistory;
import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;
import cn.iocoder.yudao.service.framework.excel.core.vo.ImportRespVO;
import cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil;
import cn.iocoder.yudao.service.framework.operateLog.core.annotations.OperateLog;
import cn.iocoder.yudao.service.framework.operateLog.core.enums.OperateTypeEnum;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageParam;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.model.infra.codegen.*;
import cn.iocoder.yudao.service.model.infra.data.InfraDictType;
import cn.iocoder.yudao.service.repository.infra.codegen.*;
import cn.iocoder.yudao.service.util.date.DateUtils;
import cn.iocoder.yudao.service.util.entity.EntityUtils;
import cn.iocoder.yudao.service.util.upgrade.UpgradeUtils;
import org.jsoup.internal.StringUtil;
import org.springframework.stereotype.Component;

import jakarta.annotation.Resource;
import java.io.File;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

import static cn.hutool.core.map.MapUtil.getStr;
import static cn.hutool.core.text.CharSequenceUtil.*;

/**
 * 代码生成的引擎，用于具体生成代码
 * 目前基于 {@link org.apache.velocity.app.Velocity} 模板引擎实现
 *
 * 考虑到 Java 模板引擎的框架非常多，Freemarker、Velocity、Thymeleaf 等等，所以我们采用 hutool 封装的 {@link cn.hutool.extra.template.Template} 抽象
 *
 * @author 芋道源码
 */
@Component
public class CodegenEngine {

    /**
     * 后端的模板配置
     *
     * key：模板在 resources 的地址
     * value：生成的路径
     */
    private static final Map<String, String> TABLE_INSERT_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("model/baseVO"), templatePath("model/baseVOPath"))
            .put(templatePath("model/repository"), templatePath("model/repositoryPath"))
            .put(templatePath("model/javaModel"), templatePath("model/javaModelPath"))
            .put(templatePath("model/vueModel"), templatePath("model/vueModelPath"))
            .build();

    private static final Map<String, String> TABLE_UPDATE_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("model/baseVO"), templatePath("model/baseVOPath"))
            .put(templatePath("model/repository"), templatePath("model/repositoryPath"))
            .put(templatePath("model/javaModel"), templatePath("model/javaModelPath"))
            .put(templatePath("model/vueModel"), templatePath("model/vueModelPath"))
            .build();
    private static final Map<String, String> TABLE_DELETE_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("model/baseVO"), templatePath("model/baseVOPath"))
            .put(templatePath("model/repository"), templatePath("model/repositoryPath"))
            .put(templatePath("model/javaModel"), templatePath("model/javaModelPath"))
            .put(templatePath("model/vueModel"), templatePath("model/vueModelPath"))
            .build();

    private static final Map<String, String> MODULE_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("interfaceModule/controller"), templatePath("interfaceModule/controllerPath"))
            .put(templatePath("interfaceModule/convert"), templatePath("interfaceModule/convertPath"))
            .put(templatePath("interfaceModule/serviceImpl"), templatePath("interfaceModule/serviceImplPath"))
            .put(templatePath("interfaceModule/service"), templatePath("interfaceModule/servicePath"))
            .put(templatePath("interfaceModule/errorCode"), templatePath("interfaceModule/errorCodePath"))
            .put(templatePath("interfaceModule/vueApi"), templatePath("interfaceModule/vueApiPath"))
            .build();

    private static final Map<String, String> DICT_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("dict/javaEnum"), templatePath("dict/javaEnumPath"))
            .put(templatePath("dict/javaType"), templatePath("dict/javaTypePath"))
            .put(templatePath("dict/vueType"), templatePath("dict/vueTypePath"))
            .put(templatePath("dict/vueEnum"), templatePath("dict/vueEnumPath"))
            .build();

    private static final Map<String, String> INTERFACE_INSERT_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("interface/controller"), templatePath("interface/controllerPath"))
            .put(templatePath("interface/convert"), templatePath("interface/convertPath"))
            .put(templatePath("interface/serviceImpl"), templatePath("interface/serviceImplPath"))
            .put(templatePath("interface/service"), templatePath("interface/servicePath"))
            .put(templatePath("interface/voInput"), templatePath("interface/voInputPath"))
            .put(templatePath("interface/voOutput"), templatePath("interface/voOutputPath"))
            .put(templatePath("interface/repository"), templatePath("interface/repositoryPath"))
            .put(templatePath("interface/repositorySub"), templatePath("interface/repositorySubPath"))
            .put(templatePath("interface/errorCode"), templatePath("interface/errorCodePath"))
            .put(templatePath("interface/vueApi"), templatePath("interface/vueApiPath"))
            .build();

    private static final Map<String, String> INTERFACE_UPDATE_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("interface/controller"), templatePath("interface/controllerPath"))
            .put(templatePath("interface/convert"), templatePath("interface/convertPath"))
            .put(templatePath("interface/serviceImpl"), templatePath("interface/serviceImplPath"))
            .put(templatePath("interface/service"), templatePath("interface/servicePath"))
            .put(templatePath("interface/voInput"), templatePath("interface/voInputPath"))
            .put(templatePath("interface/voOutput"), templatePath("interface/voOutputPath"))
            .put(templatePath("interface/vueApi"), templatePath("interface/vueApiPath"))
            .build();

    @Resource
    private InfraDatabaseTableRepository infraDatabaseTableRepository;

    @Resource
    private InfraInterfaceModuleRepository infraInterfaceModuleRepository;

    @Resource
    private InfraInterfaceRepository infraInterfaceRepository;

    @Resource
    private InfraInterfaceVoClassRepository infraInterfaceVoClassRepository;

    @Resource
    private InfraInterfaceSubclassRepository infraInterfaceSubclassRepository;


    @Resource
    private SchemaHistory schemaHistory;

    /**
     * 模板引擎，由 hutool 实现
     */
    private final TemplateEngine templateEngine;
    /**
     * 全局通用变量映射
     */
    private final Map<String, Object> globalBindingMap = new HashMap<>();

    public CodegenEngine() {
        // 初始化 TemplateEngine 属性
        TemplateConfig config = new TemplateConfig();
        config.setResourceMode(TemplateConfig.ResourceMode.CLASSPATH);
        this.templateEngine = new VelocityEngine(config);
    }

    public void initGlobalBindingMap() {
        // 全局配置
        globalBindingMap.put("basePackage", "cn.iocoder.yudao");
        // 全局 Java Bean
        globalBindingMap.put("CommonResultClassName", CommonResult.class.getName());
        globalBindingMap.put("PageResultClassName", PageResult.class.getName());
        // Util 工具类
        globalBindingMap.put("ServiceExceptionUtilClassName", ServiceExceptionUtil.class.getName());
        globalBindingMap.put("DateUtilsClassName", DateUtils.class.getName());
        globalBindingMap.put("ExcelUtilsClassName", ExcelUtils.class.getName());
        globalBindingMap.put("OperateLogClassName", OperateLog.class.getName());
        globalBindingMap.put("OperateTypeEnumClassName", OperateTypeEnum.class.getName());
        globalBindingMap.put("javaPath", FileUtil.getParent(FileUtil.getAbsolutePath(""), 3));
        globalBindingMap.put("vuePath", FileUtil.getParent(FileUtil.getAbsolutePath(""), 4));
    }

    private void convertParams(List<CodegenInterfaceParam> params){
        for(CodegenInterfaceParam param : params)
        {
            param.setClassType(0);
            if(Objects.equals(param.getVariableType(), "VOClass")) {
                Optional<InfraInterfaceVoClass> optionalInfraInterfaceVoClass = infraInterfaceVoClassRepository.findById(UUID.fromString(param.getRelatedId()));
                if(optionalInfraInterfaceVoClass.isEmpty())
                    break;
                InfraInterfaceVoClass voClass = optionalInfraInterfaceVoClass.get();
                param.setVariableType(voClass.name());
                param.setClassType(1);
            }
            if(Objects.equals(param.getVariableType(), "Subclass")) {
                Optional<InfraInterfaceSubclass> optionalInfraInterfaceSubclass = infraInterfaceSubclassRepository.findById(UUID.fromString(param.getRelatedId()));
                if(optionalInfraInterfaceSubclass.isEmpty())
                    break;
                InfraInterfaceSubclass subclass = optionalInfraInterfaceSubclass.get();
                param.setVariableType(subclass.name());
                param.setClassType(2);
            }
            param.setHumpName(toCamelCase(param.getName()));
        }
    }

    private String srcExtendClass(UUID id){
        Optional<InfraInterfaceVoClass> opVoClass = infraInterfaceVoClassRepository.findById(id);
        if(opVoClass.isEmpty())
            return "";
        if(opVoClass.get().parentId().isEmpty())
            return "";
        if(opVoClass.get().type() == 1) {
            return srcExtendClass(UUID.fromString(opVoClass.get().parentId()));
        } else {
            return infraDatabaseTableRepository.findById(UUID.fromString(opVoClass.get().parentId())).get().name();
        }
    }

    private String getExtendClassImport(String extendClass, Map<String, Object> bindingMap){
        StringBuilder extendClassImport;
        Optional<InfraInterfaceVoClass> opVoClass = infraInterfaceVoClassRepository.findByName(extendClass);
        if(opVoClass.isEmpty())
            return "";
        if(opVoClass.get().type() == 0) {
            InfraDatabaseTable table = infraDatabaseTableRepository.findById(UUID.fromString(opVoClass.get().parentId())).get();
            extendClassImport = new StringBuilder("import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                    ".service.vo." + table.firstModule() + "." + table.secondModule() + ".baseVO." +
                    upperFirst(toCamelCase((table.name()))) + "Base"+ ";");
        }else{
            InfraInterface infraInterface = infraInterfaceRepository.findById(UUID.fromString(opVoClass.get().parentId())).get();
            List<String> parentNames = getParentName(Objects.requireNonNull(infraInterface.module()).id());
            parentNames.remove(0);
            extendClassImport = new StringBuilder("import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") + ".service.vo.");
            for(String parentName : parentNames){
                extendClassImport.append(".").append(parentName);
            }
            InfraInterfaceModule infraInterfaceModule =  infraInterfaceModuleRepository.findById(infraInterface.moduleId()).get();
            extendClassImport.append(".").append(toCamelCase(infraInterfaceModule.name())).append(";");
        }
        return extendClassImport.toString();
    }
    private void generateInterfaceErrorCode(Map<String, Object> bindingMap){
        InfraInterface infraInterface = (InfraInterface) bindingMap.get("interface");
        InfraDatabaseTable inputTable = (InfraDatabaseTable) bindingMap.get("inputTable");
        InfraDatabaseTable outputTable = (InfraDatabaseTable) bindingMap.get("outputTable");
        bindingMap.put("duplicateErrorCode", "");
        bindingMap.put("duplicateErrorMessage", "");
        bindingMap.put("notExistErrorCode", "");
        bindingMap.put("notExistErrorMessage", "");

        if(infraInterface.name().toLowerCase().contains("update")
                || infraInterface.name().toLowerCase().contains("create")){
            errorCodeDuplicate(bindingMap, inputTable, "duplicateErrorCode", "duplicateErrorMessage");
        }
        if(infraInterface.name().toLowerCase().contains("update")
                && !infraInterface.inputSubclasses().isEmpty()){
            InfraInterfaceSubclass subclass = infraInterface.inputSubclasses().get(0);
            InfraInterfaceVoClass voClass = infraInterfaceVoClassRepository.findByName(subclass.inheritClass()).get();
            String inputSrcExtendClass = srcExtendClass(voClass.id());
            InfraDatabaseTable subTable = infraDatabaseTableRepository.findByName(inputSrcExtendClass).get();
            errorCodeDuplicate(bindingMap, subTable, "subDuplicateErrorCode", "subDuplicateErrorMessage");
            errorCodeNotExist(bindingMap, subTable, "subNotExistErrorCode", "subNotExistErrorMessage");
        }
        if(infraInterface.name().toLowerCase().contains("delete")
                || infraInterface.name().toLowerCase().contains("update")){
            errorCodeNotExist(bindingMap, inputTable, "notExistErrorCode", "notExistErrorMessage");
        }
        if(infraInterface.name().toLowerCase().contains("singleget")){
            errorCodeNotExist(bindingMap, outputTable, "notExistErrorCode", "notExistErrorMessage");
        }

    }

    private void errorCodeDuplicate(Map<String, Object> bindingMap, InfraDatabaseTable table, String codeKey, String messageKey){
        if(table == null)
            return;
        List<InfraDatabaseIndex> indexList = table.indexes().stream()
                .filter(index-> index.indexType().equals("UNIQUE INDEX"))
                .filter(index -> index.columnNames().stream().noneMatch(name -> name.contains("no")))
                .collect(Collectors.toList());
        if(indexList.isEmpty())
            return;

        InfraDatabaseIndex uniqueIndex = indexList.get(0);
        String uniqueIndexName = uniqueIndex.indexName().substring(uniqueIndex.indexName().indexOf("_") + 1);
        bindingMap.put(codeKey, uniqueIndexName.toUpperCase() + "_DUPLICATE");
        StringBuilder duplicateErrorMessage = new StringBuilder("");
        List<String> uniqueColumnName = uniqueIndex.columnNames();
        for(String columnName : uniqueColumnName){
            List<InfraDatabaseColumn> columnList = table.columns().stream().filter(
                    column -> column.table().equals(columnName)).collect(Collectors.toList());
            if(!columnList.isEmpty() && !Objects.equals(columnList.get(0).javaType(), "Long")){
                if(duplicateErrorMessage.toString().isEmpty()) {
                    duplicateErrorMessage.append(columnList.get(0).columnComment());
                }else{
                    duplicateErrorMessage.append("、").append(columnList.get(0).columnComment());
                }
            }
        }
        duplicateErrorMessage.insert(0, "已经存在相同").append("的").append(table.comment());
        bindingMap.put(messageKey, duplicateErrorMessage.toString());
    }

    private void errorCodeNotExist(Map<String, Object> bindingMap, InfraDatabaseTable table, String codeKey, String messageKey){
        if(table == null)
            return;
        bindingMap.put(codeKey, table.name().toUpperCase() + "_NOT_EXIST");
        bindingMap.put(messageKey, table.comment() + "不存在");
    }

    private void generateInterfaceFunctionContent(Map<String, Object> bindingMap){
        StringBuilder functionContent = new StringBuilder();
        InfraInterface infraInterface = (InfraInterface) bindingMap.get("interface");
        InfraDatabaseTable inputTable = (InfraDatabaseTable) bindingMap.get("inputTable");
        InfraDatabaseColumn inputTableIdColumn = null;
        String inputTableName = null, inputRepositoryName = null;
        if(infraInterface.name().toLowerCase().contains("create")
                || infraInterface.name().toLowerCase().contains("update")
                ||infraInterface.name().toLowerCase().contains("delete")){
            inputTableIdColumn = inputTable.columns().stream().filter(column -> column.columnName().equals("id"))
                    .collect(Collectors.toList()).get(0);
            inputTableName = upperFirst(toCamelCase(inputTable.name()));
            inputRepositoryName = toCamelCase(inputTable.name()) + "Repository";
        }

        InfraDatabaseTable outputTable = (InfraDatabaseTable) bindingMap.get("outputTable");
        String outputTableName = null, outputRepositoryName = null;
        if(infraInterface.name().toLowerCase().contains("query") || infraInterface.name().toLowerCase().contains("singleget")){
            outputTableName = upperFirst(toCamelCase(outputTable.name()));
            outputRepositoryName = toCamelCase(outputTable.name()) + "Repository";
        }

        String convertClass = bindingMap.get("moduleNameHumpUp") + "Convert";

        String convertName = bindingMap.get("interfaceNameHump").toString();
        if(infraInterface.name().toLowerCase().contains("create")){
            String duplicateErrorCode = bindingMap.get("duplicateErrorCode").toString();
            String repositoryDuplicateFunctionName = bindingMap.get("repositoryDuplicateFunctionName").toString();
            String repositoryDuplicateFunctionParams = bindingMap.get("repositoryDuplicateFunctionParams").toString();
            convertName = convertName + "InputConvert";
            if(!repositoryDuplicateFunctionName.isEmpty()) {
                //生成代码 Optional<InfraDictNo> optionalDuplicateInfraDictNo = infraDictNoRepository.findDictNo(inputVO.getDictNo());
                functionContent.append("        Optional<").append(inputTableName).append(">").append(" optionalDuplicate")
                        .append(inputTableName).append(" = ").append(inputRepositoryName).append(".")
                        .append(repositoryDuplicateFunctionName).append("(").append(repositoryDuplicateFunctionParams).append(");\r\n");
                //生成代码 if(optionalDuplicateInfraDictNo.isPresent())
                functionContent.append("        if(optionalDuplicate").append(inputTableName).append(".isPresent()){\r\n");
                //生成代码 throw exception(DICT_NO_DUPLICATE);
                functionContent.append("            throw exception(").append(duplicateErrorCode).append(");\r\n");
                //生成代码 }
                functionContent.append("        }\r\n");
            }
            //生成代码 InfraDictNo newInfraDictNo = DictNoConvert.INSTANCE.createInputConvert(inputVO);
            functionContent.append("        ").append(inputTableName).append(" new").append(inputTableName).append(" = ")
                    .append(convertClass).append(".INSTANCE.").append(convertName).append("(inputVO);\r\n");
            //生成代码 InfraDictNo newInfraDictNo = InfraDictNoRepository.insert(newInfraDictNo);
            functionContent.append("        ").append("new").append(inputTableName).append(" = ")
                    .append(inputRepositoryName).append(".insert(new").append(inputTableName).append(");\r\n");
            if(infraInterface.outputType().equals("param")){
                InfraInterfaceParam firstOutputParam = infraInterface.outputParams().get(0);
                if(Objects.equals(inputTableIdColumn.javaType(), firstOutputParam.variableType())){
                    //生成代码 return newInfraDictNo.id();
                    functionContent.append("        return new").append(inputTableName).append(".id();\r\n");
                }else if(firstOutputParam.variableType().equals("Boolean")){
                    //生成代码 return true;
                    functionContent.append("        return true;");
                }else{
                    //生成代码 return null;
                    functionContent.append("        return null;");
                }
            }else {
                //生成代码 return null;
                functionContent.append("        return null;");
            }

        }else if(infraInterface.name().toLowerCase().contains("update")){
            convertName = convertName + "InputConvert";
            String duplicateErrorCode = bindingMap.get("duplicateErrorCode").toString();
            String notExistErrorCode = bindingMap.get("notExistErrorCode").toString();
            String repositoryDuplicateFunctionName = bindingMap.get("repositoryDuplicateFunctionName").toString();
            String repositoryDuplicateFunctionParams = bindingMap.get("repositoryDuplicateFunctionParams").toString();
            InfraDatabaseTable inputSubTable = (InfraDatabaseTable) bindingMap.get("inputSubTable");
            if(!repositoryDuplicateFunctionName.isEmpty()) {
                //生成代码 Optional<InfraDictNo> optionalDuplicateInfraDictNo =
                // infraDictNoRepository.findDictNo(inputVO.getDictNo(), inputVO.getId());
                functionContent.append("        Optional<").append(inputTableName).append(">").append(" optionalDuplicate")
                        .append(inputTableName).append(" = ").append(inputRepositoryName).append(".")
                        .append(repositoryDuplicateFunctionName).append("(").append(repositoryDuplicateFunctionParams).append(");\r\n");
                //生成代码 if(opDuplicateInfraDictNo.isPresent() && !inputVO.getId().equals(opDuplicateInfraDictNo.get().id()))
                functionContent.append("        if(optionalDuplicate").append(inputTableName)
                        .append(".isPresent() && !inputVO.getId().equals(optionalDuplicate").append(inputTableName).append(".get().id())){\r\n");
                //生成代码 throw exception(DICT_NO_DUPLICATE);
                functionContent.append("            throw exception(").append(duplicateErrorCode).append(");\r\n");
                //生成代码 }
                functionContent.append("        }\r\n");
            }
            //生成代码 Optional<InfraDictNo> optionalOldInfraDictNo = infraDictNoRepository.findById(inputVO.getId());
            functionContent.append("        Optional<").append(inputTableName).append(">").append(" optionalOld")
                    .append(inputTableName).append(" = ").append(inputRepositoryName).append(".findById(inputVO.getId());\r\n");
            //生成代码 if(optionalOldInfraDictNo.isEmpty())
            functionContent.append("        if(optionalOld").append(inputTableName).append(".isEmpty()){\r\n");
            //生成代码 throw exception(DICT_NO_EXIST);
            functionContent.append("            throw exception(").append(notExistErrorCode).append(");\r\n");
            //生成代码 }
            functionContent.append("        }\r\n");

            //子类更新
            if(inputSubTable != null){
                String inputSubTableName = upperFirst(toCamelCase(inputSubTable.name())) ;
                String moduleNameHumpUp = bindingMap.get("moduleNameHumpUp").toString();
                String interfaceNameHump = (String) bindingMap.get("interfaceNameHump");
                String interfaceInput = moduleNameHumpUp + upperFirst(interfaceNameHump) + "Input";
                String inputSubClassName = bindingMap.get("inputSubClassName").toString();
                String inputSubRepositoryName = toCamelCase(inputSubTable.name()) + "Repository";
                String subNotExistErrorCode = bindingMap.get("subNotExistErrorCode").toString();
                String subDuplicateErrorCode = bindingMap.get("subDuplicateErrorCode") == null ? "" : bindingMap.get("subDuplicateErrorCode").toString();
                String subRepositoryDuplicateFunctionName = bindingMap.get("subRepositoryDuplicateFunctionName").toString();
                String subRepositoryDuplicateFunctionParams = bindingMap.get("subRepositoryDuplicateFunctionParams").toString();
                //生成代码  for(DictTypeUpdateInput.data data : inputVO.getDatas()){
                functionContent.append("        for(").append(interfaceInput).append(".").append(inputSubClassName)
                        .append(" ").append(inputSubClassName).append(" : ").append("inputVO.get").append(upperFirst(inputSubClassName))
                        .append("s()){\r\n");
                //生成代码 if(Objects.equals(data.getOperateType(), "delete")){
                functionContent.append("            if(Objects.equals(").append(inputSubClassName).append(".getOperateType(), \"delete\")){\r\n");
                //生成代码 Optional<InfraDictData> optionalDeleteInfraDictData = infraDictDataRepository.findById(data.getId());
                functionContent.append("                Optional<").append(inputSubTableName).append("> optionalDelete").append(inputSubTableName)
                        .append(" = ").append(inputSubRepositoryName).append(".findById(").append(inputSubClassName).append(".getId());\r\n");
                //生成代码 if(optionalDeleteInfraDictData.isEmpty()){
                functionContent.append("                if(optionalDelete").append(inputSubTableName).append(".isEmpty()){\r\n");
                //生成代码 throw exception(DICT_DATA_NOT_EXISTS);
                functionContent.append("                    throw exception(").append(subNotExistErrorCode).append(");\r\n");
                //生成代码          }
                functionContent.append("                }\r\n");
                //生成代码 infraDictDataRepository.deleteById(data.getId());
                functionContent.append("                ").append(inputSubRepositoryName).append(".deleteById(").append(inputSubClassName)
                        .append(".getId());\r\n");
                //生成代码 }else if(Objects.equals(data.getOperateType(), "new")){
                functionContent.append("            ").append("}else if(Objects.equals(").append(inputSubClassName)
                        .append(".getOperateType(), \"new\")){\r\n");
                if(!subDuplicateErrorCode.isEmpty()) {
                    //生成代码 Optional<InfraDictData> optionalDuplicateInfraDictData = infraDictDataRepository.findByTypeIdAndValue(data.getTypeId(), data.getValue());
                    functionContent.append("                Optional<").append(inputSubTableName).append("> optionalDuplicate")
                            .append(inputSubTableName).append(" = ").append(inputSubRepositoryName)
                            .append(".").append(subRepositoryDuplicateFunctionName)
                            .append("(").append(subRepositoryDuplicateFunctionParams).append(");\r\n");
                    //生成代码 if(optionalDuplicateInfraDictData.isPresent()){
                    functionContent.append("                if(optionalDuplicate").append(inputSubTableName).append(".isPresent()){\r\n");
                    //生成代码 throw exception(DICT_DATA_VALUE_DUPLICATE);
                    functionContent.append("                    throw exception(").append(subDuplicateErrorCode).append(");\r\n");
                    //生成代码      }
                    functionContent.append("                }\r\n");
                }
                //生成代码 InfraDictData newData = DictTypeConvert.INSTANCE.updateInputDataConvert(data);
                functionContent.append("                ").append(inputSubTableName).append(" new").append(inputSubTableName)
                        .append(" = ").append(convertClass).append(".INSTANCE.").append(convertName).append("(")
                        .append(inputSubClassName).append(");\r\n");
                //生成代码 infraDictDataRepository.insert(newData);
                functionContent.append("                ").append(inputSubRepositoryName).append(".insert(new").append(inputSubTableName)
                        .append(");\r\n");
                //生成代码 }else {
                functionContent.append("            }else{\r\n");
                //生成代码 Optional<InfraDictData> optionalOldInfraDictData = infraDictDataRepository.findById(data.getId());
                functionContent.append("                Optional<").append(inputSubTableName).append("> optionalOld").append(inputSubTableName)
                        .append(" = ").append(inputSubRepositoryName).append(".findById(").append(inputSubClassName)
                        .append(".getId());\r\n");
                //生成代码 if(optionalOldInfraDictData.isEmpty()) {
                functionContent.append("                if(optionalOld").append(inputSubTableName).append(".isEmpty()) {\r\n");
                //生成代码 throw exception(DICT_DATA_NOT_EXISTS);
                functionContent.append("                    ").append("throw exception(").append(subNotExistErrorCode).append(");\r\n");
                //生成代码          }
                functionContent.append("                }\r\n");
                if(!subDuplicateErrorCode.isEmpty()) {
                    //生成代码 Optional<InfraDictData> optionalDuplicateInfraDictData = infraDictDataRepository.findByTypeIdAndValue(data.getTypeId(), data.getValue());
                    functionContent.append("                Optional<").append(inputSubTableName).append("> optionalDuplicate")
                            .append(inputSubTableName).append(" = ").append(inputSubRepositoryName)
                            .append(".").append(subRepositoryDuplicateFunctionName)
                            .append("(").append(subRepositoryDuplicateFunctionParams).append(");\r\n");
                    //生成代码 if(optionalDuplicateInfraDictData.isPresent() && !data.getId().equals(optionalDuplicateInfraDictData.get().id()))
                    functionContent.append("                if(optionalDuplicate").append(inputSubTableName).append(".isPresent() && !")
                            .append(inputSubClassName).append(".getId().equals(optionalDuplicate")
                            .append(inputSubTableName).append(".get().id())){\r\n");
                    //生成代码 throw exception(DICT_DATA_VALUE_DUPLICATE);
                    functionContent.append("                    throw exception(").append(subDuplicateErrorCode).append(");\r\n");
                    //生成代码      }
                    functionContent.append("                }\r\n");
                }
                //生成代码 InfraDictData updateInfraDictData = DictTypeConvert.INSTANCE.updateInputDataConvert(data);
                functionContent.append("                ").append(inputSubTableName).append(" update").append(inputSubTableName)
                        .append(" = ").append(convertClass).append(".INSTANCE.").append(convertName).append("(")
                        .append(inputSubClassName).append(");\r\n");
                //生成代码 if (!EntityUtils.isEquals(optionalOldInfraDictData.get(), updateInfraDictData))
                functionContent.append("                if (!EntityUtils.isEquals(optionalOld").append(inputSubTableName)
                        .append(".get(), update").append(inputSubTableName).append("))\r\n");
                //生成代码 infraDictDataRepository.update(updateInfraDictData);
                functionContent.append("                    ").append(inputSubRepositoryName).append(".update(update")
                        .append(inputSubTableName).append(");\r\n");
                //生成代码      }
                functionContent.append("            }\r\n");
                //生成代码  }
                functionContent.append("        }\r\n");
            }

            //生成代码 InfraDictNo updateInfraDictNo = DictNoConvert.INSTANCE.updateInputConvert(inputVO);
            functionContent.append("        ").append(inputTableName).append(" update").append(inputTableName).append(" = ")
                    .append(convertClass).append(".INSTANCE.").append(convertName).append("(inputVO);\r\n");
            if(inputSubTable != null){
                String upperInputSubClassName = bindingMap.get("inputSubClassName").toString().toUpperCase();
                //生成代码 updateInfraDictType = InfraDictTypeDraft.$.produce(updateInfraDictType, draft -> {
                functionContent.append("        update").append(inputTableName).append(" = ").append(inputTableName)
                        .append("Draft.$.produce(update").append(inputTableName).append(", draft -> {\r\n");
                //生成代码 DraftObjects.unload(draft, InfraDictTypeProps.DATAS);
                functionContent.append("            DraftObjects.unload(draft, ").append(inputTableName).append("Props.")
                        .append(upperInputSubClassName).append("S);\r\n");
                //生成代码 });
                functionContent.append("        });\r\n");
            }

            //if (!EntityUtils.isEquals(optionalOldInfraDictType.get(), updateInfraDictType))
            functionContent.append("        if (!EntityUtils.isEquals(optionalOld").append(inputTableName).append(".get(), update")
                    .append(inputTableName).append("))\r\n");
            //生成代码  InfraDictNoRepository.insert(newInfraDictNo);
            functionContent.append("            ").append(inputRepositoryName) .append(".update(update").append(inputTableName).append(");\n");
            InfraInterfaceParam firstOutputParam = infraInterface.outputParams().get(0);
            if(firstOutputParam.variableType().equals("Boolean")){
                //生成代码 return true;
                functionContent.append("        return true;");
            }else{
                //生成代码 return null;
                functionContent.append("        return null;");
            }

        }else if(infraInterface.name().toLowerCase().contains("delete")){
            String notExistErrorCode = bindingMap.get("notExistErrorCode").toString();
            //生成代码 Optional<InfraDictNo> optionalDeleteInfraDictNo = infraDictNoRepository.findById(id);
            functionContent.append("        Optional<").append(inputTableName).append(">").append(" optionalDelete").append(inputTableName)
                    .append(" = ").append(inputRepositoryName).append(".findById(id);\r\n");
            //生成代码 if(optionalOldInfraDictNo.isEmpty())
            functionContent.append("        if(optionalDelete").append(inputTableName).append(".isEmpty()){\r\n");
            //生成代码 throw exception(DICT_NO_EXIST);
            functionContent.append("            throw exception(").append(notExistErrorCode).append(");\r\n");
            //生成代码 }
            functionContent.append("        }\r\n");
            // infraDictNoRepository.deleteById(id);
            functionContent.append("        ").append(inputRepositoryName).append(".deleteById(id);\r\n");
            InfraInterfaceParam firstOutputParam = infraInterface.outputParams().get(0);
            if(firstOutputParam.variableType().equals("Boolean")){
                //生成代码 return true;
                functionContent.append("        return true;");
            }else{
                //生成代码 return null;
                functionContent.append("        return null;");
            }
        }else if(infraInterface.name().toLowerCase().contains("listquery")){
            convertName = convertName + "OutputConvert";
            //生成代码 List<InfraDictNo> listInfraDictNo = infraDictNoRepository.listQuery(inputVO);
            functionContent.append("        List<").append(outputTableName).append("> list").append(outputTableName)
                    .append(" = ").append(outputRepositoryName).append(".").append(infraInterface.name()).append("(inputVO);\n");
            //生成代码 return DictNoConvert.INSTANCE.createInputConvert(listInfraDictNo);
            functionContent.append("        return ").append(convertClass).append(".INSTANCE.").append(convertName)
                    .append("(list").append(outputTableName).append(");\n");
        }else if(infraInterface.name().toLowerCase().contains("pagequery")){
            convertName = convertName + "OutputConvert";
            String moduleNameHumpUp = (String) bindingMap.get("moduleNameHumpUp");
            String interfaceNameHump = (String) bindingMap.get("interfaceNameHump");
            String interfaceOutput = moduleNameHumpUp + upperFirst(interfaceNameHump) + "Output";

            //生成代码 Page<InfraDictNo> pageNo = infraDictNoRepository.query(inputVO);
            functionContent.append("        Page<").append(outputTableName).append("> page").append(outputTableName)
                    .append(" = ").append(outputRepositoryName).append(".").append(infraInterface.name()).append("(inputVO);\r\n");
            //生成代码 List<DictNoQueryOutput> listNo = DictNoConvert.INSTANCE.queryPageOutputConvert(pageNo.getRows());
            functionContent.append("        List<").append(interfaceOutput).append("> list").append(outputTableName)
                    .append(" = ").append(convertClass).append(".INSTANCE.").append(convertName)
                    .append("(page").append(outputTableName).append(".getRows());\r\n");
            //生成代码 return new PageResult<>(listNo, pageNo.getTotalRowCount());
            functionContent.append("        return new PageResult<>(list").append(outputTableName).append(", page")
                    .append(outputTableName).append(".getTotalRowCount());");
        }else if(infraInterface.name().toLowerCase().contains("singleget")){
            convertName = convertName + "OutputConvert";
            String notExistErrorCode = bindingMap.get("notExistErrorCode").toString();

            //生成代码 Optional<InfraDictData> optionalDictData = infraDictDataRepository.findById(id);
            functionContent.append("        Optional<").append(outputTableName).append("> option").append(outputTableName)
                    .append(" = ").append(outputRepositoryName).append(".findById(id);\r\n");
            //生成代码 if(optionalOldInfraDictNo.isEmpty())
            functionContent.append("        if(option").append(outputTableName).append(".isEmpty()){\r\n");
            //生成代码 throw exception(DICT_NO_EXIST);
            functionContent.append("            throw exception(").append(notExistErrorCode).append(");\r\n");
            //生成代码 }
            functionContent.append("        }\r\n");
            //生成代码 return DictDataConvert.INSTANCE.singleGetOutputConvert(optionalDictData.get());
            functionContent.append("        return ").append(convertClass).append(".INSTANCE.").append(convertName)
                    .append("(option").append(outputTableName).append(".get());\r\n");
        }
        if(!functionContent.toString().isEmpty()) {
            bindingMap.put("functionContent", functionContent.toString());
        }
    }

    private void generateInterfaceRepositoryFunction(Map<String, Object> bindingMap){
        InfraInterface infraInterface = (InfraInterface) bindingMap.get("interface");
        InfraDatabaseTable inputTable = (InfraDatabaseTable) bindingMap.get("inputTable");
        InfraDatabaseTable outputTable = (InfraDatabaseTable) bindingMap.get("outputTable");
        String moduleNameHumpUp = (String) bindingMap.get("moduleNameHumpUp");
        String interfaceNameHump = (String) bindingMap.get("interfaceNameHump");
        InfraDatabaseTable inputSubTable = (InfraDatabaseTable) bindingMap.get("inputSubTable");
        String inputClass = moduleNameHumpUp + upperFirst(interfaceNameHump) + "Input";

        bindingMap.put("subRepositoryDuplicateFunctionName", "");
        bindingMap.put("subRepositoryDuplicateFunctionParams", "");
        bindingMap.put("subRepositoryFunction", "");
        List<InfraDatabaseIndex> subInputIndexList = new ArrayList<>();

        if(inputSubTable != null) {
            subInputIndexList = inputSubTable.indexes().stream()
                    .filter(index -> index.indexType().equals("UNIQUE INDEX")).collect(Collectors.toList());
        }
        if(infraInterface.name().toLowerCase().contains("update") && inputSubTable != null && !subInputIndexList.isEmpty()){

            String inputSubClassName = bindingMap.get("inputSubClassName").toString();

            InfraDatabaseIndex subUniqueIndex = subInputIndexList.get(0);
            List<String> subUniqueColumnName = subUniqueIndex.columnNames();
            StringBuilder columnFunction = new StringBuilder();
            StringBuilder columnParam = new StringBuilder();
            StringBuilder functionParam = new StringBuilder();
            StringBuilder function = new StringBuilder();
            for (String columnName : subUniqueColumnName) {
                if (columnFunction.toString().isEmpty()) {
                    columnFunction.append(upperFirst(toCamelCase(columnName)));
                } else {
                    columnFunction.append("And").append(upperFirst(toCamelCase(columnName)));
                }
                List<InfraDatabaseColumn> columnList = inputSubTable.columns().stream().filter(
                        column -> column.columnName().equals(columnName)).collect(Collectors.toList());
                if (columnParam.toString().isEmpty()) {
                    columnParam.append(columnList.get(0).javaType()).append(" ").append(toCamelCase(columnName));
                    functionParam.append(inputSubClassName).append(".get").append(upperFirst(toCamelCase(columnName))).append("()");
                } else {
                    columnParam.append(", ").append(columnList.get(0).javaType()).append(" ").append(toCamelCase(columnName));
                    functionParam.append(", ").append(inputSubClassName).append(".get").append(upperFirst(toCamelCase(columnName))).append("()");
                }
            }

            function.append("    Optional<").append(upperFirst(toCamelCase(inputSubTable.name()))).append("> findFirstBy")
                    .append(columnFunction) .append("(") .append(columnParam) .append(")\r\n");
            String repositoryDuplicateFunctionName = "findFirstBy" + columnFunction;
            bindingMap.put("subRepositoryDuplicateFunctionName", repositoryDuplicateFunctionName);
            bindingMap.put("subRepositoryDuplicateFunctionParams", functionParam);

            bindingMap.put("subRepositoryFunction", function.toString());
        }

        bindingMap.put("repositoryDuplicateFunctionName", "");
        bindingMap.put("repositoryDuplicateFunctionParams", "");
        bindingMap.put("repositoryFunction", "");
        List<InfraDatabaseIndex> inputIndexList;
        if(inputTable != null) {
            inputIndexList = inputTable.indexes().stream()
                    .filter(index -> index.indexType().equals("UNIQUE INDEX"))
                    .filter(index -> index.columnNames().stream().noneMatch(name -> name.contains("no")))
                    .collect(Collectors.toList());
        }else{
            inputIndexList = new ArrayList<>();
        }
        StringBuilder function = new StringBuilder();
        if((infraInterface.name().toLowerCase().contains("update")
                || infraInterface.name().toLowerCase().contains("create")) && !inputIndexList.isEmpty()) {

            InfraDatabaseIndex uniqueIndex = inputIndexList.get(0);
            List<String> uniqueColumnName = uniqueIndex.columnNames();
            StringBuilder columnFunction = new StringBuilder();
            StringBuilder columnParam = new StringBuilder();
            StringBuilder functionParam = new StringBuilder();
            for (String columnName : uniqueColumnName) {
                if (columnFunction.toString().isEmpty()) {
                    columnFunction.append(upperFirst(toCamelCase(columnName)));
                } else {
                    columnFunction.append("And").append(upperFirst(toCamelCase(columnName)));
                }
                List<InfraDatabaseColumn> columnList = inputTable.columns().stream().filter(
                        column -> column.columnName().equals(columnName)).collect(Collectors.toList());
                if (columnParam.toString().isEmpty()) {
                    columnParam.append(columnList.get(0).javaType()).append(" ").append(toCamelCase(columnName));
                    functionParam.append("inputVO.get").append(upperFirst(toCamelCase(columnName))).append("()");
                } else {
                    columnParam.append(", ").append(columnList.get(0).javaType()).append(" ").append(toCamelCase(columnName));
                    functionParam.append(", ").append("inputVO.get").append(upperFirst(toCamelCase(columnName))).append("()");
                }
            }

            if(infraInterface.name().toLowerCase().contains("create") || infraInterface.name().toLowerCase().contains("update")){
                function.append("    Optional<").append(upperFirst(toCamelCase(inputTable.name()))).append("> findFirstBy")
                        .append(columnFunction) .append("(") .append(columnParam) .append(")\r\n");
                String repositoryDuplicateFunctionName = "findFirstBy" + columnFunction;
                bindingMap.put("repositoryDuplicateFunctionName", repositoryDuplicateFunctionName);
                bindingMap.put("repositoryDuplicateFunctionParams", functionParam);
            }
            bindingMap.put("repositoryFunction", function.toString());
            return;
        }


        if(outputTable == null)
            return;
        String outputTableTable = toCamelCase(outputTable.name()) + "Table";
        StringBuilder where = new StringBuilder();
        if(infraInterface.name().toLowerCase().contains("query")){
            for(InfraInterfaceParam param : infraInterface.inputParams()) {
                List<InfraDatabaseColumn> columnList = outputTable.columns().stream()
                        .filter(column -> column.id().toString().equals(param.relatedId())).collect(Collectors.toList());
                if(!columnList.isEmpty()){
                    where.append("                .whereIf(");
                    if(param.variableType().equals("String")){
                        where.append("StringUtils.hasText(inputVO.get").append(upperFirst(param.name())).append("()), () -> ")
                                .append(outputTableTable).append(".").append(param.name()).append("().like(inputVO.get")
                                .append(upperFirst(param.name())).append("()))");
                    }else {
                        where.append("inputVO.get").append(upperFirst(param.name())).append("() != null, ");
                        if(param.variableType().contains("[]")){
                            where.append("() -> ").append(outputTableTable).append(".").append(param.name()).append("()")
                                    .append(".between(inputVO.get").append(upperFirst(param.name())).append("()[0], inputVO.get")
                                    .append(upperFirst(param.name())).append("()[1]))");
                        }else{
                            where.append(outputTableTable).append(".").append(param.name()).append("().eq(inputVO.get")
                                    .append(upperFirst(param.name())).append("()))");
                        }
                    }
                    where.append("\r\n");
                }
            }
        }
        if(infraInterface.name().toLowerCase().contains("pagequery")){
            function.append("    default Page<").append(upperFirst(toCamelCase(outputTable.name()))).append("> ")
                    .append(infraInterface.name())
                    .append("(") .append(inputClass)
                    .append((" inputVO){\r\n        return sql().createQuery("))
                    .append(outputTableTable).append(")\r\n")
                    .append(where)
                    .append("                        .orderBy(").append(outputTableTable).append(".id().desc())\r\n")
                    .append("                        .select(").append(outputTableTable).append(").fetchPage(inputVO.getPageNo() - 1, inputVO.getPageSize());\r\n    }\r\n");
        }
        if(infraInterface.name().toLowerCase().contains("listquery")){
            function.append("    default List<").append(upperFirst(toCamelCase(outputTable.name()))).append("> ")
                    .append(infraInterface.name()).append("(") .append(inputClass)
                    .append((" inputVO){\r\n        return sql().createQuery(")).append(outputTableTable).append(")\r\n")
                    .append(where)
                    .append("                .orderBy(").append(outputTableTable).append(".id().desc())\r\n")
                    .append("                .select(").append(outputTableTable).append(").execute();\r\n    }\r\n");

        }
        bindingMap.put("repositoryFunction", function.toString());
    }

    private Map<String, Object> getInterfaceBindingMap(InfraInterface infraInterface){
        Map<String, Object> bindingMap = new HashMap<>(globalBindingMap);
        if(infraInterface.moduleId() == null)
            return null;
        InfraInterfaceModule infraInterfaceModule =  infraInterfaceModuleRepository.findById(Objects.requireNonNull(infraInterface.moduleId())).get();
        String interfaceNameHump = toCamelCase(infraInterface.name());
        String interfaceNameSymbol = toSymbolCase(infraInterface.name(), '-');
        String moduleNameHump = infraInterfaceModule.name();
        String moduleNameSymbol = toSymbolCase(moduleNameHump, '-');
        String moduleNameHumpUp = upperFirst(moduleNameHump);

        bindingMap.put("sceneEnum", CodegenSceneEnum.valueOf("ADMIN"));
        bindingMap.put("interface", infraInterface);
        bindingMap.put("module", infraInterfaceModule);
        // 接口方法 首字母大写
        String javaMethod = upperFirst(infraInterface.method());
        if(Objects.equals(javaMethod, "Download")){
            javaMethod = "Get";
        }
        if(Objects.equals(javaMethod, "Upload")){
            javaMethod = "Post";
        }
        bindingMap.put("javaMethod", javaMethod);
        // 接口名 -符号链接
        bindingMap.put("interfaceNameSymbol", interfaceNameSymbol);
        // 接口名驼峰 首字母小写
        bindingMap.put("interfaceNameHump", interfaceNameHump);
        // 接口名驼峰 首字母大写
        bindingMap.put("interfaceNameHumpUp", upperFirst(interfaceNameHump));
        List<String> parentNames = getParentName(Objects.requireNonNull(infraInterface.module()).id());
        parentNames.remove(0);
        Collections.reverse(parentNames);
        bindingMap.put("parentNames", parentNames);
        String moduleRootName = parentNames.get(0);
        bindingMap.put("moduleRootName", moduleRootName);
        Optional<InfraInterfaceModule> moduleRoot = infraInterfaceModuleRepository.findFirstByName(moduleRootName);
        moduleRoot.ifPresent(module -> bindingMap.put("moduleRootIndex", String.format("%03d", module.sort())));
        // 接口模块名驼峰 首字母小写
        bindingMap.put("moduleNameHump", moduleNameHump);
        // 接口名模块驼峰 首字母大写
        bindingMap.put("moduleNameHumpUp", moduleNameHumpUp);
        bindingMap.put("moduleNameSymbol", moduleNameSymbol);
        bindingMap.put("modulePath", String.join("/", parentNames));
        String vueModulePath = String.join("/", parentNames);

        bindingMap.put("vueModulePath", vueModulePath);
        bindingMap.put("vueModulePathSymbol", toSymbolCase(vueModulePath, '-'));
        bindingMap.put("vueFileName", moduleNameHump);
        List<CodegenInterfaceParam> inputParams = CodegenConvert.INSTANCE.convertList19(infraInterface.inputParams());
        convertParams(inputParams);
        bindingMap.put("inputParams", inputParams);

        List<CodegenInterfaceParam> outputParams = CodegenConvert.INSTANCE.convertList19(infraInterface.outputParams());
        convertParams(outputParams);
        bindingMap.put("outputParams", outputParams);

        List<String> controllerImportList = new ArrayList<>();
        List<String> serviceImplImportList = new ArrayList<>();
        List<String> convertImportList = new ArrayList<>();
        List<String> inputImportList = new ArrayList<>();
        List<String> outputImportList = new ArrayList<>();
        List<String> repositoryList = new ArrayList<>();
        List<String> serviceImplList = new ArrayList<>();

        bindingMap.put("isGenerateRepository", false);
        bindingMap.put("isGenerateErrorCode", false);
        bindingMap.put("isGenerateSubRepository", false);
        bindingMap.put("inputSubTableName", "");

        if(infraInterface.isImport()){
            String excelUtilsImport = "import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                    ".service.framework.excel.core.util.ExcelUtils;" ;
            controllerImportList.add(excelUtilsImport);
            serviceImplImportList.add(excelUtilsImport);
        }

        List<CodegenInterfaceSubclass> inputSubclasses = CodegenConvert.INSTANCE.convertList20(infraInterface.inputSubclasses());
        for(CodegenInterfaceSubclass inputSubclass : inputSubclasses){
            convertParams(inputSubclass.getSubclassParams());
            if(!inputSubclass.getInheritClass().isEmpty()){
                String inputSubExtendClassImport = getExtendClassImport(inputSubclass.getInheritClass(), bindingMap);
                if(!inputSubExtendClassImport.isEmpty())
                    inputImportList.add(inputSubExtendClassImport);

                InfraInterfaceVoClass voClass = infraInterfaceVoClassRepository.findByName(inputSubclass.getInheritClass()).get();
                String inputSrcExtendClass = srcExtendClass(voClass.id());
                InfraDatabaseTable subTable = infraDatabaseTableRepository.findByName(inputSrcExtendClass).get();
                String inputSrcExtendTableImport = "import " +
                        getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                        ".service.model." + subTable.firstModule() + "." + subTable.secondModule() + "." +
                        upperFirst(toCamelCase(inputSrcExtendClass)) + ";";
                convertImportList.add(inputSrcExtendTableImport);
                bindingMap.put("inputSubTable", subTable);
                bindingMap.put("inputSubTableName", upperFirst(toCamelCase(subTable.name())));
                bindingMap.put("inputSubClassName", inputSubclass.getName());

                if(infraInterface.name().toLowerCase().contains("update")) {
                    serviceImplList.add("    @Resource\r\n" + "    private " + upperFirst(toCamelCase(subTable.name()))
                            + "Repository " + toCamelCase(subTable.name()) + "Repository;\r\n");
                    serviceImplImportList.add("import " +
                            getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                            ".service.repository." + subTable.firstModule() + "." + subTable.secondModule() + "." +
                            upperFirst(toCamelCase(inputSrcExtendClass)) + "Repository;");
                    serviceImplImportList.add(inputSrcExtendTableImport);

                    bindingMap.put("subTableFirstModule", subTable.firstModule());
                    bindingMap.put("subTableSecondModule", subTable.secondModule());
                    bindingMap.put("subClassNameHump", upperFirst(toCamelCase(subTable.name())));
                    bindingMap.put("isGenerateSubRepository", true);
                }
            }
        }
        bindingMap.put("inputSubclasses", inputSubclasses);

        List<CodegenInterfaceSubclass> outputSubclasses = CodegenConvert.INSTANCE.convertList20(infraInterface.outputSubclasses());
        for(CodegenInterfaceSubclass outputSubclass : outputSubclasses){
            convertParams(outputSubclass.getSubclassParams());
            if(!outputSubclass.getInheritClass().isEmpty()){
                String outputSubExtendClassImport = getExtendClassImport(outputSubclass.getInheritClass(), bindingMap);
                if(!outputSubExtendClassImport.isEmpty())
                    outputImportList.add(outputSubExtendClassImport);
            }
        }
        bindingMap.put("outputSubclasses", outputSubclasses);
        // src_extend_class
        bindingMap.put("functionContent", "        return null;");
        String inputSrcExtendClass = "";
        String inputSrcExtendTableImport = "";
        String inputExtendClassImport;
        if(!infraInterface.inputExtendClass().isEmpty()) {
            InfraInterfaceVoClass voClass = infraInterfaceVoClassRepository.findByName(infraInterface.inputExtendClass()).get();
            if (Objects.equals(voClass.name(), "PageParam")){
                inputExtendClassImport = "import "+ PageParam.class.getName() +";";
            }else {
                inputSrcExtendClass = srcExtendClass(voClass.id());

                InfraDatabaseTable table = infraDatabaseTableRepository.findByName(inputSrcExtendClass).get();
                inputSrcExtendTableImport = "import " +
                        getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                        ".service.model." + table.firstModule() + "." + table.secondModule() + "." +
                        upperFirst(toCamelCase(inputSrcExtendClass)) + ";";
                inputSrcExtendClass = upperFirst(toCamelCase(inputSrcExtendClass));
                inputExtendClassImport = getExtendClassImport(infraInterface.inputExtendClass(), bindingMap);

                if(infraInterface.name().toLowerCase().contains("update") || infraInterface.name().toLowerCase().contains("create")){
                    bindingMap.put("inputTable", table);
                    bindingMap.put("tableFirstModule", table.firstModule());
                    bindingMap.put("tableSecondModule", table.secondModule());
                    bindingMap.put("classNameHump", upperFirst(toCamelCase(table.name())));
                    generateInterfaceRepositoryFunction(bindingMap);
                    bindingMap.put("isGenerateRepository", true);
                    generateInterfaceErrorCode(bindingMap);
                    bindingMap.put("isGenerateErrorCode", true);
                    generateInterfaceFunctionContent(bindingMap);
                    serviceImplList.add("    @Resource\r\n" + "    private " + upperFirst(toCamelCase(table.name()))
                            + "Repository " + toCamelCase(table.name()) + "Repository;\r\n");
                    serviceImplImportList.add("import " +
                            getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                            ".service.repository." + table.firstModule() +  "." + table.secondModule() + "." +
                            upperFirst(toCamelCase(inputSrcExtendClass)) + "Repository;");
                    serviceImplImportList.add(inputSrcExtendTableImport);
                    String inputSrcExtendDraftTableImport = "import " +
                            getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                            ".service.model." + table.firstModule() + "." + table.secondModule() + "." +
                            upperFirst(toCamelCase(inputSrcExtendClass)) + "Draft;";
                    serviceImplImportList.add(inputSrcExtendDraftTableImport);
                    String inputSrcExtendPropsTableImport = "import " +
                            getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                            ".service.model." + table.firstModule() + "." + table.secondModule() + "." +
                            upperFirst(toCamelCase(inputSrcExtendClass)) + "Props;";
                    serviceImplImportList.add(inputSrcExtendPropsTableImport);
                }

                if(infraInterface.name().toLowerCase().contains("delete")){
                    bindingMap.put("inputTable", table);
                    bindingMap.put("tableFirstModule", table.firstModule());
                    bindingMap.put("tableSecondModule", table.secondModule());
                    bindingMap.put("classNameHump", upperFirst(toCamelCase(table.name())));
                    generateInterfaceErrorCode(bindingMap);
                    bindingMap.put("isGenerateErrorCode", true);
                    generateInterfaceFunctionContent(bindingMap);
                    serviceImplList.add("    @Resource\r\n" + "    private " + upperFirst(toCamelCase(table.name()))
                            + "Repository " + toCamelCase(table.name()) + "Repository;\r\n");
                    serviceImplImportList.add("import " +
                            getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                            ".service.repository." + table.firstModule() + "." + table.secondModule() + "." +
                            upperFirst(toCamelCase(inputSrcExtendClass)) + "Repository;");
                    serviceImplImportList.add(inputSrcExtendTableImport);
                }
            }
            convertImportList.add(inputSrcExtendTableImport);
            inputImportList.add(inputExtendClassImport);
        }
        bindingMap.put("inputSrcExtendClass", inputSrcExtendClass);

        String outputSrcExtendClass = "";
        String outputSrcExtendTableImport;
        String outputExtendClassImport;
        if(!infraInterface.outputExtendClass().isEmpty()) {
            InfraInterfaceVoClass voClass = infraInterfaceVoClassRepository.findByName(infraInterface.outputExtendClass()).get();
            outputSrcExtendClass = srcExtendClass(voClass.id());
            if (Objects.equals(voClass.name(), "ImportRespVO")){
                outputExtendClassImport = "import "+ ImportRespVO.class.getName() +";";
            }else {
                InfraDatabaseTable table = infraDatabaseTableRepository.findByName(outputSrcExtendClass).get();
                outputSrcExtendTableImport = "import " +
                        getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                        ".service.model." + table.firstModule() + "." + table.secondModule() + "." +
                        upperFirst(toCamelCase(outputSrcExtendClass)) + ";";
                outputSrcExtendClass = upperFirst(toCamelCase(outputSrcExtendClass));
                outputExtendClassImport = getExtendClassImport(infraInterface.outputExtendClass(), bindingMap);
                convertImportList.add(outputSrcExtendTableImport);

                if (infraInterface.name().toLowerCase().contains("pagequery") || infraInterface.name().toLowerCase().contains("listquery")
                        || infraInterface.name().toLowerCase().contains("singleget")) {
                    bindingMap.put("outputTable", table);
                    bindingMap.put("tableFirstModule", table.firstModule());
                    bindingMap.put("tableSecondModule", table.secondModule());
                    bindingMap.put("classNameHump", upperFirst(toCamelCase(table.name())));
                    generateInterfaceRepositoryFunction(bindingMap);
                    if (infraInterface.name().toLowerCase().contains("pagequery") || infraInterface.name().toLowerCase().contains("listquery")) {
                        bindingMap.put("isGenerateRepository", true);
                    } else {
                        generateInterfaceErrorCode(bindingMap);
                    }
                    generateInterfaceFunctionContent(bindingMap);
                    serviceImplList.add("    @Resource\r\n" + "    private " + upperFirst(toCamelCase(table.name()))
                            + "Repository " + toCamelCase(table.name()) + "Repository;\r\n");
                    serviceImplImportList.add("import " +
                            getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                            ".service.repository." + table.firstModule() + "." + table.secondModule() + "." +
                            upperFirst(toCamelCase(outputSrcExtendClass)) + "Repository;");
                    serviceImplImportList.add(outputSrcExtendTableImport);
                }
            }
            outputImportList.add(outputExtendClassImport);
        }
        bindingMap.put("outputSrcExtendClass", outputSrcExtendClass);


        // input
        String input;
        String inputVar = "inputVO";
        String inputRequest = "";
        String inputValid = "";
        String inputSingleParam = "";
        bindingMap.put("isGenerateVoInput", false);
        bindingMap.put("isGenerateVoOutput", false);
        if(Objects.equals(infraInterface.inputType(), "void")){
            input = "";
        }else if(Objects.equals(infraInterface.inputType(), "param")){
            input = infraInterface.inputParams().get(0).variableType();
            if(infraInterface.inputParams().get(0).isList()) {
                input = "List<" + input + ">";
            }
            inputVar = infraInterface.inputParams().get(0).name();
            inputRequest = "@RequestParam(" + "\"" + inputVar + "\") ";
            inputSingleParam = "@Parameter(name = \"" + inputVar + "\", description = \"" +
                    infraInterface.inputParams().get(0).comment() + "\", " +
                    (infraInterface.inputParams().get(0).required()? "required = true, " : "") +
                    "example = \""+
                    infraInterface.inputParams().get(0).example() +"\")";
        } else {
            input = moduleNameHumpUp + upperFirst(interfaceNameHump) + "Input";

            StringBuilder inputImport = new StringBuilder("import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                    ".service.vo")  ;
            for(String parentName : parentNames){
                inputImport.append(".").append(parentName);
            }
            inputImport.append(".").append(moduleNameHump).append(".").append(input).append(";");
            controllerImportList.add(inputImport.toString());

            convertImportList.add(inputImport.toString());

            if(Objects.equals(infraInterface.inputType(), "VOClassList"))
            {
                input = "List<" + input + ">";
            }
            if(!Objects.equals(javaMethod, "Get")){
                inputRequest = "@RequestBody ";
            }
            inputValid = "@Valid ";
            if(infraInterface.name().toLowerCase().contains("pagequery") || infraInterface.name().toLowerCase().contains("listquery")){
                repositoryList.add(inputImport.toString());
                bindingMap.put("isGenerateRepository", true);
            }
            bindingMap.put("isGenerateVoInput", true);
        }
        bindingMap.put("interfaceInput", input);
        bindingMap.put("interfaceInputVar", inputVar);
        bindingMap.put("interfaceInputRequest", inputRequest);
        bindingMap.put("interfaceInputValid", inputValid);
        bindingMap.put("interfaceInputSingleParam", inputSingleParam);

        // output
        String output;
        if(Objects.equals(infraInterface.outputType(), "void")){
            output = "void";
        }else if(Objects.equals(infraInterface.outputType(), "param")){
            output = infraInterface.outputParams().get(0).variableType();
            if(infraInterface.outputParams().get(0).isList()) {
                output = "List<" + output + ">";
            }
        }else {
            output =  moduleNameHumpUp + upperFirst(interfaceNameHump) + "Output";

            StringBuilder outputImport = new StringBuilder("import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                    ".service.vo")  ;
            for(String parentName : parentNames){
                outputImport.append(".").append(parentName);
            }
            outputImport.append(".").append(moduleNameHump).append(".").append(output).append(";");
            controllerImportList.add(outputImport.toString());
            convertImportList.add(outputImport.toString());

            if(Objects.equals(infraInterface.outputType(), "VOClassList")) {
                output = "List<" + output + ">";
            }
            if(Objects.equals(infraInterface.outputType(), "VOClassPage")) {
                output = "PageResult<" + output + ">";
            }

            bindingMap.put("isGenerateVoOutput", true);
        }
        bindingMap.put("interfaceOutput", output);

        bindingMap.put("controllerImportList", controllerImportList);
        bindingMap.put("serviceImplImportList", serviceImplImportList);
        bindingMap.put("convertImportList", convertImportList);
        bindingMap.put("inputImportList", inputImportList);
        bindingMap.put("outputImportList", outputImportList);
        bindingMap.put("repositoryList", repositoryList);
        bindingMap.put("serviceImplList", serviceImplList);

        return bindingMap;
    }

    private void fileInsertImport(StringBuilder fileContent, List<String> importList) {
        int importIndex = fileContent.indexOf("import");
        for(String strImport : importList) {
            if(fileContent.indexOf(strImport) < 0)
                fileContent.insert(importIndex, strImport + "\r\n");
        }
    }
    private void fileInsert(StringBuilder fileContent, List<String> insertList, Map<String, Object> bindingMap) {
        String moduleNameHumpUp = bindingMap.get("moduleNameHumpUp").toString();
        int importIndex = fileContent.indexOf(moduleNameHumpUp + "ServiceImpl");
        importIndex = fileContent.indexOf("{", importIndex) + 4;
        for(String strInsert : insertList) {
            if(fileContent.indexOf(strInsert) < 0)
                fileContent.insert(importIndex, strInsert + "\r\n");
        }
    }

    public void interfaceInsert(UUID interfaceId){
        InfraInterface infraInterface = infraInterfaceRepository.findDetailById(interfaceId).get();
        Map<String, Object> bindingMap = getInterfaceBindingMap(infraInterface);

        List<String> controllerImportList = Convert.toList(String.class, bindingMap.get("controllerImportList"));
        List<String> convertImportList = Convert.toList(String.class, bindingMap.get("convertImportList"));
        List<String> inputImportList = Convert.toList(String.class, bindingMap.get("inputImportList"));
        List<String> outputImportList = Convert.toList(String.class, bindingMap.get("outputImportList"));
        List<String> repositoryList = Convert.toList(String.class, bindingMap.get("repositoryList"));
        List<String> serviceImplImportList = Convert.toList(String.class, bindingMap.get("serviceImplImportList"));
        List<String> serviceImplList = Convert.toList(String.class, bindingMap.get("serviceImplList"));

        Map<String, String> templates = new LinkedHashMap<>(INTERFACE_INSERT_TEMPLATES);
        for(Map.Entry<String, String> entry : templates.entrySet()){
            String vmPath = entry.getKey();
            String filePath = entry.getValue();
            if (vmPath.contains("voInput.vm") && bindingMap.get("isGenerateVoInput").equals(false))
                continue;
            if (vmPath.contains("voOutput.vm") && bindingMap.get("isGenerateVoOutput").equals(false))
                continue;
            if (vmPath.contains("repository.vm") && bindingMap.get("isGenerateRepository").equals(false))
                continue;
            if (vmPath.contains("repositorySub.vm") && bindingMap.get("isGenerateSubRepository").equals(false))
                continue;
            filePath = templateEngine.getTemplate(filePath).render(bindingMap);
            File newFile;
            if(!FileUtil.exist(filePath)) {
                if (vmPath.contains("voInput") || vmPath.contains("voOutput")){
                    newFile = FileUtil.touch(filePath);
                    RuntimeUtil.execForStr("git add " + filePath);
                } else
                    continue;
            }else{
                newFile = FileUtil.file(filePath);
            }

            String interfaceContent;
            if(!vmPath.isEmpty()) {
                interfaceContent = templateEngine.getTemplate(vmPath).render(bindingMap);

                StringBuilder fileContent = new StringBuilder(FileUtil.readUtf8String(newFile));
                int index = fileContent.lastIndexOf("\r\n}");
                // vue前端代码直接追加 java代码要放到最后一个}前
                if(vmPath.contains("vueApi")){
                    fileContent.append(interfaceContent);
                }else if(vmPath.contains("errorCode")){
                    errorCodeFileInsert(fileContent, interfaceContent, bindingMap);
                }else if(vmPath.contains("repository")){
                    if(fileContent.indexOf(interfaceContent) < 0){
                        fileContent.insert(index, interfaceContent);
                    }
                }
                else {
                    if(index > 0) {
                        fileContent.insert(index, interfaceContent);
                    }else {
                        fileContent.append(interfaceContent);
                    }
                }

                if(vmPath.contains("convert") && !convertImportList.isEmpty())
                    fileInsertImport(fileContent, convertImportList);

                if((vmPath.contains("serviceImpl") || vmPath.contains("service") || vmPath.contains("controller"))
                        && !controllerImportList.isEmpty())
                    fileInsertImport(fileContent, controllerImportList);

                if(vmPath.contains("serviceImpl") && !serviceImplImportList.isEmpty())
                    fileInsertImport(fileContent, serviceImplImportList);

                if(vmPath.contains("voInput") && !inputImportList.isEmpty())
                    fileInsertImport(fileContent, inputImportList);

                if(vmPath.contains("voOutput") && !outputImportList.isEmpty())
                    fileInsertImport(fileContent, outputImportList);

                if(vmPath.contains("repository") && !repositoryList.isEmpty())
                    fileInsertImport(fileContent, repositoryList);

                if(vmPath.contains("serviceImpl") && !serviceImplList.isEmpty())
                    fileInsert(fileContent, serviceImplList, bindingMap);
                FileUtil.writeUtf8String(fileContent.toString(), newFile);

            }
        }
    }

    private void errorCodeFileInsert(StringBuilder fileContent, String interfaceContent, Map<String, Object> bindingMap){

        InfraInterfaceModule module = (InfraInterfaceModule) bindingMap.get("module");
        if(bindingMap.get("duplicateErrorCode") == null && bindingMap.get("notExistErrorCode") == null
                && bindingMap.get("subDuplicateErrorCode") == null && bindingMap.get("subNotExistErrorCode") == null)
            return;
        String duplicateErrorCode = bindingMap.get("duplicateErrorCode") == null? "": bindingMap.get("duplicateErrorCode").toString();
        String notExistErrorCode = bindingMap.get("notExistErrorCode") == null? "": bindingMap.get("notExistErrorCode").toString();
        String subDuplicateErrorCode = bindingMap.get("subDuplicateErrorCode") == null? "": bindingMap.get("subDuplicateErrorCode").toString();
        String subNotExistErrorCode = bindingMap.get("subNotExistErrorCode") == null? "": bindingMap.get("subNotExistErrorCode").toString();
        // 查找插入位置
        int insertIndex = fileContent.lastIndexOf("}") - 2;
        insertIndex = fileContent.indexOf("\r\n", insertIndex) + 2;
        String[] errorCodes = interfaceContent.split("\r\n");
        int count = fileContent.toString().split("new ErrorCode").length;
        if((!duplicateErrorCode.isEmpty() && fileContent.indexOf(duplicateErrorCode) == -1)){
            errorCodes[0] = errorCodes[0].replace("${duplicateErrorNumber}",
                    "ERROR_CODE_START_CODE + " + count++);
            if(fileContent.indexOf(errorCodes[0]) < 0) {
                fileContent.insert(insertIndex, errorCodes[0] + "\r\n");
                insertIndex = insertIndex + errorCodes[0].length() + 2;
            }
        }

        if(!notExistErrorCode.isEmpty() && fileContent.indexOf(notExistErrorCode) == -1){
            errorCodes[1] = errorCodes[1].replace("${notExistErrorNumber}",
                    "ERROR_CODE_START_CODE + " + count++);
            if(fileContent.indexOf(errorCodes[1]) < 0) {
                fileContent.insert(insertIndex, errorCodes[1] + "\r\n");
                insertIndex = insertIndex + errorCodes[1].length() + 2;
            }
        }

        if((!subDuplicateErrorCode.isEmpty() && fileContent.indexOf(subDuplicateErrorCode) == -1)){
            errorCodes[2] = errorCodes[2].replace("${subDuplicateErrorNumber}",
                    "ERROR_CODE_START_CODE + " + count++);
            if(fileContent.indexOf(errorCodes[2]) < 0) {
                fileContent.insert(insertIndex, errorCodes[2] + "\r\n");
                insertIndex = insertIndex + errorCodes[2].length() + 2;
            }
        }

        if(!subNotExistErrorCode.isEmpty() && fileContent.indexOf(subNotExistErrorCode) == -1){
            errorCodes[3] = errorCodes[3].replace("${subNotExistErrorNumber}",
                    "ERROR_CODE_START_CODE + " + count++);
            if(fileContent.indexOf(errorCodes[3]) < 0) {
                fileContent.insert(insertIndex, errorCodes[3] + "\r\n");
                insertIndex = insertIndex + errorCodes[3].length() + 2;
            }
        }

    }

    public void interfaceDelete(UUID interfaceId){
        InfraInterface infraInterface = infraInterfaceRepository.findDetailById(interfaceId).get();

        Map<String, Object> bindingMap = getInterfaceBindingMap(infraInterface);

        List<String> oldControllerImportList = Convert.toList(String.class, bindingMap.get("controllerImportList"));
        List<String> oldConvertImportList = Convert.toList(String.class, bindingMap.get("convertImportList"));
        List<String> oldInputImportList = Convert.toList(String.class, bindingMap.get("inputImportList"));
        List<String> oldOutputImportList = Convert.toList(String.class, bindingMap.get("outputImportList"));

        Map<String, String> templates = new LinkedHashMap<>(INTERFACE_UPDATE_TEMPLATES);
        for(Map.Entry<String, String> entry : templates.entrySet()){
            String vmPath = entry.getKey();
            String filePath = entry.getValue();
            // 删除旧的传入传出参数类
            if (vmPath.contains("voInput")) {
                String oldVoInputFilePath = templateEngine.getTemplate(filePath).render(bindingMap);
                if(FileUtil.exist(oldVoInputFilePath)) {
                    RuntimeUtil.execForStr("git rm -f " + oldVoInputFilePath);
                    continue;
                }
            }
            if (vmPath.contains("voOutput")) {
                String oldVoOutputFilePath = templateEngine.getTemplate(filePath).render(bindingMap);
                if(FileUtil.exist(oldVoOutputFilePath)) {
                    RuntimeUtil.execForStr("git rm -f " + oldVoOutputFilePath);
                    continue;
                }
            }

            String oldInterfaceContent;
            if(!vmPath.isEmpty()) {
                oldInterfaceContent = templateEngine.getTemplate(vmPath).render(bindingMap);
                filePath = templateEngine.getTemplate(filePath).render(bindingMap);

                File file = FileUtil.file(filePath);
                if(!FileUtil.exist(file))
                    continue;
                StringBuilder fileContent = new StringBuilder(FileUtil.readUtf8String(file));
                if(vmPath.contains("controller") || vmPath.contains("serviceImpl")){
                    int oldSplitFirstIndex = 0;
                    // 查找函数拆分的下标 根据) {或) throws IOException { 拆分成两部分
                    if(oldInterfaceContent.contains(") {")) {
                        oldSplitFirstIndex = oldInterfaceContent.indexOf(") {");
                    }
                    if(oldSplitFirstIndex == 0 && oldInterfaceContent.contains(") throws IOException {")){
                        oldSplitFirstIndex = oldInterfaceContent.indexOf(") throws IOException {");
                    }
                    if(oldSplitFirstIndex == 0)
                        continue;
                    String oldFunctionContent = oldInterfaceContent.substring(0, oldSplitFirstIndex);

                    int functionBeginIndex = fileContent.indexOf(oldFunctionContent);
                    int functionEndIndex = fileContent.indexOf("\n    }", functionBeginIndex);
                    if(functionBeginIndex > 0){
                        fileContent.replace(functionBeginIndex , functionEndIndex + 8, "");
                    }
                }else if(vmPath.contains("convert") || vmPath.contains("service") ){
                    int index = fileContent.indexOf(oldInterfaceContent);
                    if(index > 0){
                        fileContent.replace(index , index + oldInterfaceContent.length(), "");
                    }

                }else if( vmPath.contains("vueApi") ) {
                    int index = fileContent.indexOf(oldInterfaceContent);
                    if(index > 0){
                        fileContent.replace(index , index + oldInterfaceContent.length(), "");
                    }

                }
                if(vmPath.contains("convert") && !oldConvertImportList.isEmpty())
                    fileDeleteImport(fileContent, oldConvertImportList);

                if((vmPath.contains("serviceImpl") || vmPath.contains("service") || vmPath.contains("controller"))
                        && !oldControllerImportList.isEmpty())
                    fileDeleteImport(fileContent, oldControllerImportList);

                if(vmPath.contains("voInput") && !oldInputImportList.isEmpty())
                    fileDeleteImport(fileContent, oldInputImportList);

                if(vmPath.contains("voOutput") && !oldOutputImportList.isEmpty())
                    fileDeleteImport(fileContent, oldOutputImportList);

                FileUtil.writeUtf8String(fileContent.toString(), file);

            }
        }
    }

    private void fileDeleteImport(StringBuilder fileContent, List<String> oldImportList) {
        int insertImportIndex = 0;
        // 剔除import之后的代码坐标
        int codeIndex = fileContent.indexOf(";", fileContent.lastIndexOf("import "));
        for(String strImport : oldImportList) {
            if(strImport.isEmpty())
                continue;
            if(fileContent.indexOf(strImport) >= 0) {

                int deleteImportIndex = fileContent.indexOf(strImport);
                // 计算新的import要插入的位置 尽量插入删除import的位置 如果没有删除的import就插入到import的末尾
                if (insertImportIndex == 0 || insertImportIndex > deleteImportIndex){
                    insertImportIndex = deleteImportIndex;
                }
                // 找出要删除的class 如果代码没有使用才删除
                String deleteClass = strImport.substring(strImport.lastIndexOf(".") + 1, strImport.lastIndexOf(";"));
                if(fileContent.indexOf(deleteClass, codeIndex) < 0)
                    fileContent.delete(deleteImportIndex, deleteImportIndex + strImport.length() + 2);
            }
        }

    }

    public void interfaceUpdate(UUID newInterfaceId, InfraInterface oldInterface){
        InfraInterface newInterface = infraInterfaceRepository.findDetailById(newInterfaceId).get();

        Map<String, Object> newBindingMap = getInterfaceBindingMap(newInterface);

        Map<String, Object> oldBindingMap = getInterfaceBindingMap(oldInterface);

        List<String> newControllerImportList = Convert.toList(String.class, newBindingMap.get("controllerImportList"));
        List<String> newConvertImportList = Convert.toList(String.class, newBindingMap.get("convertImportList"));
        List<String> newInputImportList = Convert.toList(String.class, newBindingMap.get("inputImportList"));
        List<String> newOutputImportList = Convert.toList(String.class, newBindingMap.get("outputImportList"));

        List<String> oldControllerImportList = Convert.toList(String.class, oldBindingMap.get("controllerImportList"));
        List<String> oldConvertImportList = Convert.toList(String.class, oldBindingMap.get("convertImportList"));
        List<String> oldInputImportList = Convert.toList(String.class, oldBindingMap.get("inputImportList"));
        List<String> oldOutputImportList = Convert.toList(String.class, oldBindingMap.get("outputImportList"));

        Map<String, String> templates = new LinkedHashMap<>(INTERFACE_UPDATE_TEMPLATES);
        for(Map.Entry<String, String> entry : templates.entrySet()){
            String vmPath = entry.getKey();
            String filePath = entry.getValue();
            // 删除旧的传入传出参数类
            if (vmPath.contains("voInput")) {
                String oldVoInputFilePath = templateEngine.getTemplate(filePath).render(oldBindingMap);
                if(FileUtil.exist(oldVoInputFilePath)) {
                    RuntimeUtil.execForStr("git rm -f " + oldVoInputFilePath);
                }
                if (Objects.equals(newInterface.inputType(), "void")
                        || Objects.equals(newInterface.inputType(), "param"))
                    continue;
            }
            if (vmPath.contains("voOutput")) {
                String oldVoOutputFilePath = templateEngine.getTemplate(filePath).render(oldBindingMap);
                if(FileUtil.exist(oldVoOutputFilePath)) {
                    RuntimeUtil.execForStr("git rm -f " + oldVoOutputFilePath);
                }
                if(Objects.equals(newInterface.outputType(), "void")
                        || Objects.equals(newInterface.outputType(), "param"))
                    continue;
            }
            filePath = templateEngine.getTemplate(filePath).render(newBindingMap);
            File newFile;
            if(!FileUtil.exist(filePath)) {
                if (vmPath.contains("voInput") || vmPath.contains("voOutput")){
                    newFile = FileUtil.touch(filePath);
                    RuntimeUtil.execForStr("git add " + filePath);
                } else
                    continue;
            }else{
                newFile = FileUtil.file(filePath);
            }

            String newInterfaceContent;
            String oldInterfaceContent;
            if(!vmPath.isEmpty()) {
                newInterfaceContent = templateEngine.getTemplate(vmPath).render(newBindingMap);
                oldInterfaceContent = templateEngine.getTemplate(vmPath).render(oldBindingMap);

                StringBuilder fileContent = new StringBuilder(FileUtil.readUtf8String(newFile));
                if(vmPath.contains("controller") || vmPath.contains("serviceImpl")){
                    int oldSplitFirstIndex = 0, newSplitFirstIndex = 0;
                    int oldSplitSecondIndex = 0, newSplitSecondIndex = 0;
                    // 查找函数拆分的下标 根据) {或) throws IOException { 拆分成两部分
                    if(oldInterfaceContent.contains(") {")) {
                        oldSplitFirstIndex = oldInterfaceContent.indexOf(") {");
                        oldSplitSecondIndex = oldSplitFirstIndex + ") {".length() + 2;
                    }
                    if(oldSplitFirstIndex == 0 && oldInterfaceContent.contains(") throws IOException {")){
                        oldSplitFirstIndex = oldInterfaceContent.indexOf(") throws IOException {");
                        oldSplitSecondIndex = oldSplitFirstIndex + ") throws IOException {".length() + 2;
                    }
                    if(oldSplitFirstIndex == 0)
                        continue;

                    if(newInterfaceContent.contains(") {") ) {
                        newSplitFirstIndex = newInterfaceContent.indexOf(") {");
                        newSplitSecondIndex = newSplitFirstIndex + ") {".length() + 2;
                    }
                    if(newSplitFirstIndex == 0 && newInterfaceContent.contains(") throws IOException {")) {
                        newSplitFirstIndex = newInterfaceContent.indexOf(") throws IOException {");
                        newSplitSecondIndex = newSplitFirstIndex + ") throws IOException {".length() + 2;
                    }
                    if(newSplitFirstIndex == 0)
                        continue;
                    String oldFunctionContent = oldInterfaceContent.substring(0, oldSplitFirstIndex);
                    String oldReturnContent = oldInterfaceContent.substring(oldSplitSecondIndex) ;

                    String newFunctionContent = newInterfaceContent.substring(0, newSplitFirstIndex);
                    String newReturnContent = newInterfaceContent.substring(newSplitSecondIndex);

                    int functionIndex = fileContent.indexOf(oldFunctionContent);
                    if(functionIndex > 0){
                        fileContent.replace(functionIndex , functionIndex + oldFunctionContent.length(), newFunctionContent);
                    }

                    int returnIndex = fileContent.indexOf(oldReturnContent);
                    if(returnIndex > 0){
                        fileContent.replace(returnIndex , returnIndex + oldReturnContent.length(), newReturnContent);
                    }
                }else if(vmPath.contains("convert") || vmPath.contains("service") ){
                    int index = fileContent.indexOf(oldInterfaceContent);
                    if(index > 0){
                        fileContent.replace(index , index + oldInterfaceContent.length(), newInterfaceContent);
                    }
                    else
                    {
                        if(!newInterfaceContent.isEmpty()) {
                            int lastIndex = fileContent.lastIndexOf("\r\n}");
                            if(lastIndex > 0) {
                                fileContent.insert(lastIndex, newInterfaceContent);
                            }else {
                                fileContent.append(newInterfaceContent);
                            }
                        }
                    }
                }else if( vmPath.contains("vueApi") ) {
                    int index = fileContent.indexOf(oldInterfaceContent);
                    if(index > 0){
                        fileContent.replace(index , index + oldInterfaceContent.length(), newInterfaceContent);
                    }
                    else
                    {
                        if(!newInterfaceContent.isEmpty())
                            fileContent.append(newInterfaceContent);
                    }
                }else {
                    fileContent = new StringBuilder(newInterfaceContent);
                }
                if(vmPath.contains("convert") && (!newConvertImportList.isEmpty() || !oldConvertImportList.isEmpty()))
                    fileUpdateImport(fileContent, oldConvertImportList, newConvertImportList);

                if((vmPath.contains("serviceImpl") || vmPath.contains("service") || vmPath.contains("controller"))
                        && (!newControllerImportList.isEmpty() || !oldControllerImportList.isEmpty()))
                    fileUpdateImport(fileContent, oldControllerImportList, newControllerImportList);

                if(vmPath.contains("voInput") && (!newInputImportList.isEmpty() || !oldInputImportList.isEmpty()))
                    fileUpdateImport(fileContent, oldInputImportList, newInputImportList);

                if(vmPath.contains("voOutput") && (!newOutputImportList.isEmpty() || !oldOutputImportList.isEmpty()))
                    fileUpdateImport(fileContent, oldOutputImportList, newOutputImportList);
                FileUtil.writeUtf8String(fileContent.toString(), newFile);

            }
        }
    }

    private void fileUpdateImport(StringBuilder fileContent, List<String> oldImportList, List<String> newImportList) {
        int insertImportIndex = 0;
        // 剔除import之后的代码坐标
        int codeIndex = fileContent.indexOf(";", fileContent.lastIndexOf("import "));
        for(String strImport : oldImportList) {
            if(strImport.isEmpty())
                continue;
            if(fileContent.indexOf(strImport) >= 0) {

                int deleteImportIndex = fileContent.indexOf(strImport);
                // 计算新的import要插入的位置 尽量插入删除import的位置 如果没有删除的import就插入到import的末尾
                if (insertImportIndex == 0 || insertImportIndex > deleteImportIndex){
                    insertImportIndex = deleteImportIndex;
                }
                // 找出要删除的class 如果代码没有使用才删除
                String deleteClass = strImport.substring(strImport.lastIndexOf(".") + 1, strImport.lastIndexOf(";"));
                if(fileContent.indexOf(deleteClass, codeIndex) < 0)
                    fileContent.delete(deleteImportIndex, deleteImportIndex + strImport.length() + 2);
            }
        }
        if (insertImportIndex == 0)
            insertImportIndex = fileContent.indexOf("import");

        for(String strImport : newImportList) {
            if(fileContent.indexOf(strImport) < 0)
                fileContent.insert(insertImportIndex, strImport + "\r\n");
        }
    }

    public void moduleInsertExecute(InfraInterfaceModule module){
        Map<String, Object> bindingMap = getModuleBindingMap(module);
        generateModule(bindingMap);
    }

    private String moduleUpdateContent(String content, Map<String, Object> oldBindingMap, Map<String, Object> newBindingMap){
        InfraInterfaceModule oldModule = (InfraInterfaceModule) oldBindingMap.get("module");
        InfraInterfaceModule newModule = (InfraInterfaceModule) newBindingMap.get("module");
        List<String> oldParentNames = Convert.toList(String.class, oldBindingMap.get("parentNames"));
        List<String> mewParentNames = Convert.toList(String.class, newBindingMap.get("parentNames"));
        String oldName = oldModule.name();
        String oldHumpName = upperFirst(oldName);
        String oldComment = oldModule.comment();
        String newName = newModule.name();
        String newHumpName = upperFirst(newName);
        String newComment = newModule.comment();
        content = content.replace("." + oldName, "." + newName)
                .replace(toSymbolCase(oldName,'-') , toSymbolCase(newName, '-'))
                .replace(oldName + "Service", newName + "Service")
                .replace(oldHumpName + "Service", newHumpName + "Service")
                .replace(oldHumpName + "Controller", newHumpName + "Controller")
                .replace("\"" + oldComment + "\"", "\"" + newComment + "\"")
                .replace("=== " + oldComment + " ", "=== " + newComment + " ")
                .replace("* " + oldName + " " + oldComment, "* " + newName + " " + newComment)
                .replace("* " + oldName, "* " + newName)
                .replace(oldHumpName + "Convert", newHumpName + "Convert")
                .replace(String.join(".", oldParentNames), String.join(".", mewParentNames))
                .replace(oldModule.sort().toString(), newModule.sort().toString());

        return content;
    }

    public void moduleUpdateExecute(InfraInterfaceModule oldModule, InfraInterfaceModule newModule){
        Map<String, Object> oldBindingMap = getModuleBindingMap(oldModule);
        Map<String, Object> newBindingMap = getModuleBindingMap(newModule);
        Map<String, String> templates = new LinkedHashMap<>(MODULE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            String oldFilePath = templateEngine.getTemplate(filePath).render(oldBindingMap);
            String newFilePath = templateEngine.getTemplate(filePath).render(newBindingMap);

            if(!FileUtil.exist(oldFilePath))
                return;
            String content = FileUtil.readUtf8String(oldFilePath);
            content = moduleUpdateContent(content, oldBindingMap, newBindingMap);
            RuntimeUtil.execForStr("git mv " + oldFilePath + " " + newFilePath);
            File newFile = FileUtil.file(newFilePath);
            FileUtil.writeUtf8String(content, newFile);
        });

    }

    public void moduleDeleteExecute(InfraInterfaceModule module){
        Map<String, Object> bindingMap = getModuleBindingMap(module);
        Map<String, String> templates = new LinkedHashMap<>(MODULE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = templateEngine.getTemplate(filePath).render(bindingMap);
            RuntimeUtil.execForStr("git rm -f " + filePath);
        });
    }

    private Map<String, Object> getModuleBindingMap(InfraInterfaceModule module){
        Map<String, Object> bindingMap = new HashMap<>(globalBindingMap);

        bindingMap.put("sceneEnum", CodegenSceneEnum.valueOf("ADMIN"));
        bindingMap.put("module", module);
        List<String> parentNames = getParentName(UUID.fromString(module.parentId()));
        Collections.reverse(parentNames);
        bindingMap.put("parentNames", parentNames);
        List<String> parentNamesSymbol = parentNames.stream().map(parentName -> toSymbolCase(parentName, '-')).collect(Collectors.toList());
        bindingMap.put("parentNamesSymbol", parentNamesSymbol);
        bindingMap.put("nameSymbol", toSymbolCase(module.name(),'-'));
        bindingMap.put("nameHumpUp", upperFirst(module.name()));
        bindingMap.put("nameHump", 	module.name());
        bindingMap.put("modulePath", String.join("/", parentNames));
        String vueFileName = module.name();
        String vueModulePath = String.join("/", parentNames);

        bindingMap.put("vueModulePath", vueModulePath);
        bindingMap.put("vueFileName", vueFileName);
        String moduleRootName = parentNames.get(0);
        Optional<InfraInterfaceModule> moduleRoot = infraInterfaceModuleRepository.findFirstByName(moduleRootName);
        moduleRoot.ifPresent(infraInterfaceModule -> bindingMap.put("moduleRootIndex", String.format("%03d", infraInterfaceModule.sort())));
        bindingMap.put("moduleRootName", moduleRootName);
        return bindingMap;
    }

    List<String> getParentName(UUID id){
        List<String> parentNames = new ArrayList<>();
        InfraInterfaceModule module = infraInterfaceModuleRepository.findById(id).get();
        if(!Objects.equals(module.parentId(), "")) {
            parentNames.add(module.name());
            parentNames.addAll(getParentName(UUID.fromString(module.parentId())));
        }
        return parentNames;
    }

    public void generateModule(Map<String, Object> bindingMap)
    {
        Map<String, String> templates = new LinkedHashMap<>(MODULE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = templateEngine.getTemplate(filePath).render(bindingMap);
            File newFile;
            if(!FileUtil.exist(filePath)) {
                newFile = FileUtil.touch(filePath);
                RuntimeUtil.execForStr("git add " + filePath);
            }else{
                newFile = FileUtil.file(filePath);
            }

            String content;
            if(!vmPath.isEmpty()) {
                content = templateEngine.getTemplate(vmPath).render(bindingMap);
                FileUtil.writeUtf8String(content, newFile);
            }
        });
    }

    public void generateInsertTable(Map<String, Object> bindingMap)
    {
        Map<String, String> templates = new LinkedHashMap<>(TABLE_INSERT_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = templateEngine.getTemplate(filePath).render(bindingMap);
            String content = templateEngine.getTemplate(vmPath).render(bindingMap);
            File newFile;
            if(!FileUtil.exist(filePath)) {
                newFile = FileUtil.touch(filePath);
                RuntimeUtil.execForStr("git add " + filePath);
            }else{
                newFile = FileUtil.file(filePath);
            }
            FileUtil.writeUtf8String(content, newFile);
        });
    }

    public void tableInsertExecute(InfraDatabaseTable table){
        // 创建 bindingMap
        Map<String, Object> bindingMap = getTableBindingMap(table);

        generateInsertTable(bindingMap);

        generateNewTable(bindingMap);
    }

    public void generateNewTable(Map<String, Object> bindingMap){
        // 生成table
        String vmPath = templatePath("model/newTable");
        String filePath = tableFilePath();
        String content = templateEngine.getTemplate(vmPath).render(bindingMap);
        File newFile;
        if(!FileUtil.exist(filePath)) {
            newFile = FileUtil.touch(filePath);
            RuntimeUtil.execForStr("git add " + filePath);
        }else{
            newFile = FileUtil.file(filePath);
        }
        FileUtil.appendUtf8String(content, newFile);

    }

    public void generateUpdateTable(Map<String, Object> bindingMap)
    {
        Map<String, String> templates = new LinkedHashMap<>(TABLE_UPDATE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = templateEngine.getTemplate(filePath).render(bindingMap);
            String content = templateEngine.getTemplate(vmPath).render(bindingMap);
            File newFile;
            if(!FileUtil.exist(filePath)) {
                newFile = FileUtil.touch(filePath);
                RuntimeUtil.execForStr("git add " + filePath);
                FileUtil.writeUtf8String(content, newFile);
            }else{
                newFile = FileUtil.file(filePath);
                if (!filePath.contains("repository"))
                    FileUtil.writeUtf8String(content, newFile);
            }

        });
    }

    public void tableUpdateExecute(InfraDatabaseTable newTable, InfraDatabaseTable oldTable, String updateSql){
        Map<String, Object> bindingMap = getTableBindingMap(newTable);
        generateUpdateTable(bindingMap);
        generateUpdateTable(updateSql);
        if (!Objects.equals(newTable.name(), oldTable.name())
                || !Objects.equals(newTable.firstModule(), oldTable.firstModule())
                || !Objects.equals(newTable.secondModule(), oldTable.secondModule())){
            deleteOldTableFile(oldTable);
        }
    }

    public void tableDeleteExecute(InfraDatabaseTable deleteTable, String deleteSql){
        deleteOldTableFile(deleteTable);
        generateUpdateTable(deleteSql);
    }

    public void generateUpdateTable(String updateSql){
        if (Objects.equals(updateSql, ""))
            return;
        String filePath = tableFilePath();
        File newFile;
        if(!FileUtil.exist(filePath)) {
            newFile = FileUtil.touch(filePath);
            RuntimeUtil.execForStr("git add " + filePath);
        }else{
            newFile = FileUtil.file(filePath);
        }
        FileUtil.appendUtf8String(updateSql, newFile);

    }

    private void deleteOldTableFile(InfraDatabaseTable oldTable){
        Map<String, Object> bindingMap = getTableBindingMap(oldTable);
        generateDeleteOldTable(bindingMap);
    }

    public void generateDeleteOldTable(Map<String, Object> bindingMap)
    {
        Map<String, String> templates = new LinkedHashMap<>(TABLE_DELETE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = templateEngine.getTemplate(filePath).render(bindingMap);

            if(FileUtil.exist(filePath)) {
                RuntimeUtil.execForStr("git rm -f " + filePath);
            }

        });
    }

    private Map<String, Object> getTableBindingMap(InfraDatabaseTable table){
        Map<String, Object> bindingMap = new HashMap<>(globalBindingMap);
        List<CodegenDatabaseColumn> codegenColumns = CodegenConvert.INSTANCE.convertList09(table.columns());
        for(CodegenDatabaseColumn column : codegenColumns)
        {
            if(!column.getRelatedTable().isEmpty()) {
                Optional<InfraDatabaseTable> opTable = infraDatabaseTableRepository.findByName(column.getRelatedTable());
                if(opTable.isEmpty())
                    return null;
                column.setHumpRelatedTable(upperFirst(toCamelCase(column.getRelatedTable())))
                        .setFirstModule(opTable.get().firstModule())
                        .setSecondModule(opTable.get().secondModule());
            }
            if(!column.getRelatedTable().isEmpty()) {
                Optional<InfraDatabaseTable> opTable = infraDatabaseTableRepository.findByName(column.getRelatedTable());
                if(opTable.isEmpty())
                    return null;
                column.setHumpRelatedTable(upperFirst(toCamelCase(column.getRelatedTable())))
                        .setFirstModule(opTable.get().firstModule())
                        .setSecondModule(opTable.get().secondModule());
            }
            if(Objects.equals(column.getJavaType(), "String")
                    || Objects.equals(column.getJavaType(), "UUID")

            ){
                column.setVueDataType("string");
            } else if(Objects.equals(column.getJavaType(), "LocalDateTime") ){
                column.setVueDataType("Date | undefined");
            }else if(Objects.equals(column.getJavaType(), "Integer")
                    || Objects.equals(column.getJavaType(), "Long")
                    || Objects.equals(column.getJavaType(), "BigDecimal")
                    || Objects.equals(column.getJavaType(), "Double")){
                column.setVueDataType("number");
            }else if(Objects.equals(column.getJavaType(), "Boolean") ){
                column.setVueDataType("boolean");
            }else if(Objects.equals(column.getJavaType(), "List<String>")){
                column.setVueDataType("string[]");
            }else if(  Objects.equals(column.getJavaType(), "List<Long>")){
                column.setVueDataType("number[]");
            } else if(Objects.equals(column.getJavaType(), "Map<String, Object>") ) {
                column.setVueDataType("Map<String, Object>");
            }

            if(!column.getRelatedTable().isEmpty()){
                column.setVueDataType(column.getVueDataType() + " | undefined");
            }

            if(column.getColumnName().equals("id")){
                column.setVueDataType(column.getVueDataType() + " | undefined");
            }

            if(column.getNullable() && !column.getVueDataType().contains("undefined")){
                column.setVueDataType(column.getVueDataType() + " | undefined");
            }

            column.setHumpName(toCamelCase(column.getColumnName()));
        }
        List<CodegenDatabaseMapping> codegenMappings = CodegenConvert.INSTANCE.convertList16(table.mappings());
        for(CodegenDatabaseMapping mapping : codegenMappings)
        {
            Optional<InfraDatabaseTable> opTable = infraDatabaseTableRepository.findByName(mapping.getMappingTable());
            if(opTable.isEmpty())
                return null;
            mapping.setHumpMappingTable(upperFirst(toCamelCase(mapping.getMappingTable())))
                    .setFirstModule(opTable.get().firstModule())
                    .setSecondModule(opTable.get().secondModule())
                    .setAnnotate(mapping.getAnnotate().replace("\n", "\n    "));
            if(mapping.getIsList())
                mapping.setMappingVariableType("List<" + mapping.getHumpMappingTable() + ">");
            else
                mapping.setMappingVariableType(mapping.getHumpMappingTable());
        }
        bindingMap.put("table", table);
        bindingMap.put("columns", codegenColumns);
        bindingMap.put("indexes", table.indexes());
        bindingMap.put("mappings", codegenMappings);
        bindingMap.put("sceneEnum", CodegenSceneEnum.valueOf("ADMIN"));

        // 全程类名 驼峰命名 例子SystemConfigSetting
        bindingMap.put("classNameHump", upperFirst(toCamelCase(table.name())));
        return bindingMap;
    }

    public void tmpDictUpdateExecute(InfraDictType newType){
        Map<String, Object> newBindingMap = getDictBindingMap(newType);
        Map<String, String> templates = new LinkedHashMap<>(DICT_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            String newFilePath = templateEngine.getTemplate(filePath).render(newBindingMap);
            String newContent = templateEngine.getTemplate(vmPath).render(newBindingMap);
            if(filePath.contains("javaEnumPath")) {
                if (!FileUtil.exist(newFilePath)) {
                    FileUtil.touch(newFilePath);
                    RuntimeUtil.execForStr("git add " + newFilePath);
                }
                File newFile = FileUtil.file(newFilePath);
                FileUtil.writeUtf8String(newContent, newFile);
            }
        });
    }


    public void dictUpdateExecute(InfraDictType oldType, InfraDictType newType){
        Map<String, Object> oldBindingMap = getDictBindingMap(oldType);
        Map<String, Object> newBindingMap = getDictBindingMap(newType);
        Map<String, String> templates = new LinkedHashMap<>(DICT_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            String oldFilePath = templateEngine.getTemplate(filePath).render(oldBindingMap);
            String newFilePath = templateEngine.getTemplate(filePath).render(newBindingMap);

            String oldContent = templateEngine.getTemplate(vmPath).render(oldBindingMap);
            String newContent = templateEngine.getTemplate(vmPath).render(newBindingMap);
            if(oldContent.equals(newContent) && oldType.firstModule().equals(newType.firstModule()) && oldType.secondModule().equals(newType.secondModule()))
                return;
            if(filePath.contains("javaEnumPath")){
                if(oldFilePath.equals(newFilePath)){
                    if(!FileUtil.exist(newFilePath)) {
                        FileUtil.touch(newFilePath);
                        RuntimeUtil.execForStr("git add " + newFilePath);
                    }
                    File newFile = FileUtil.file(newFilePath);
                    FileUtil.writeUtf8String(newContent, newFile);
                }else{
                    if(!FileUtil.exist(oldFilePath)) {
                        FileUtil.touch(newFilePath);
                        RuntimeUtil.execForStr("git add " + newFilePath);
                    }else
                        RuntimeUtil.execForStr("git mv " + oldFilePath + " " + newFilePath);
                    File newFile = FileUtil.file(newFilePath);
                    FileUtil.writeUtf8String(newContent, newFile);
                }

            }else{
                // 删除旧dict
                int deleteIndex = 0, deleteLength = 0;
                File oldFile = FileUtil.file(oldFilePath);
                StringBuilder oldFileContent = new StringBuilder(FileUtil.readUtf8String(oldFilePath));
                if(filePath.contains("vueTypePath")){
                    oldContent = oldContent + "\r\n";
                    if(oldFileContent.indexOf(oldContent) > 0){
                        deleteIndex = oldFileContent.indexOf(oldContent);
                        deleteLength = oldContent.length();
                    }else {
                        // 去掉回车和,
                        oldContent = oldContent.substring(0, oldContent.length() - 2);
                        oldContent = oldContent.replaceAll(",","");
                        int contentIndex = oldFileContent.indexOf(oldContent);
                        if(contentIndex > 0) {
                            deleteIndex = oldFileContent.lastIndexOf(",", contentIndex);
                            deleteLength = contentIndex - deleteIndex + oldContent.length();
                        }
                    }
                }else{
                    oldContent = oldContent + "\r\n";
                    deleteIndex = oldFileContent.indexOf(oldContent);
                    deleteLength = oldContent.length();
                }
                if (deleteIndex > 0){
                    oldFileContent.delete(deleteIndex, deleteIndex + deleteLength);
                    FileUtil.writeUtf8String(oldFileContent.toString(), oldFile);
                }

                // 插入新dict
                insertNewDict(newType, newFilePath, filePath, newContent);
            }
        });

    }

    private void insertNewDict(InfraDictType type, String filePath, String vmFilePath, String content){
        File file = FileUtil.file(filePath);
        String firstModuleMatch = "// ========== " + type.firstModule().toUpperCase() + " 模块 ==========\r\n";
        if(FileUtil.exist(filePath)) {
            StringBuilder fileContent = new StringBuilder(FileUtil.readUtf8String(filePath));
            if(fileContent.indexOf(firstModuleMatch) > 0){
                fileContent.insert(fileContent.indexOf(firstModuleMatch) +  firstModuleMatch.length(), content + "\r\n");
            }else{
                // 追加空格
                if(vmFilePath.contains("vueTypePath"))
                    firstModuleMatch = "  " + firstModuleMatch;
                if(vmFilePath.contains("javaTypePath"))
                    firstModuleMatch = "    " + firstModuleMatch;
                // 查找插入位置 不同的文件 插入位置不同
                int insertIndex;
                if (vmFilePath.contains("javaTypePath")){
                    insertIndex = fileContent.lastIndexOf("}");
                    content = content + "\r\n\r\n";
                }
                else if(vmFilePath.contains("vueTypePath")){
                    String dictType = fileContent.substring(0, fileContent.indexOf("}",fileContent.indexOf("export enum DICT_TYPE {")));
                    insertIndex = dictType.lastIndexOf("'") + 1;
                    // 最后一行追加,符号
                    fileContent.insert(insertIndex, ",");
                    insertIndex = dictType.indexOf("\r\n", insertIndex) + 1;
                    firstModuleMatch = "\r\n\r\n" + firstModuleMatch;
                    // 最后一行去掉,符号
                    content = content.replaceAll(",","");
                }
                else{
                    insertIndex = fileContent.length();
                    firstModuleMatch = "\r\n" + firstModuleMatch;
                    content = content + "\r\n";
                }
                fileContent.insert(insertIndex, firstModuleMatch + content);
            }
            FileUtil.writeUtf8String(fileContent.toString(), file);
        }
    }

    public void dictInsertExecute(InfraDictType type){
        // 创建 bindingMap
        Map<String, Object> bindingMap = getDictBindingMap(type);

        generateInsertDict(bindingMap, type);
    }

    public void generateInsertDict(Map<String, Object> bindingMap, InfraDictType type)
    {
        Map<String, String> templates = new LinkedHashMap<>(DICT_TEMPLATES);
        templates.forEach((vmPath, vmFilePath) -> {
            String filePath = templateEngine.getTemplate(vmFilePath).render(bindingMap);
            String content = templateEngine.getTemplate(vmPath).render(bindingMap);
            // constants文件只插入 enum文件新建
            if(!vmFilePath.contains("javaEnumPath")){
                insertNewDict(type, filePath, vmFilePath, content);
            }
            else{
                File newFile;
                if(!FileUtil.exist(filePath)) {
                    newFile = FileUtil.touch(filePath);
                    RuntimeUtil.execForStr("git add " + filePath);
                }else{
                    newFile = FileUtil.file(filePath);
                }
                FileUtil.writeUtf8String(content, newFile);
            }

        });
    }

    private Map<String, Object> getDictBindingMap(InfraDictType type){
        Map<String, Object> bindingMap = new HashMap<>(globalBindingMap);

        bindingMap.put("dictType", type);
        bindingMap.put("datas", type.datas());
        bindingMap.put("sceneEnum", CodegenSceneEnum.valueOf("ADMIN"));
        // 模块路径 例子system/dept
        String modulePath = type.firstModule() + (type.secondModule().isEmpty()? "" : "/" + type.secondModule());
        bindingMap.put("modulePath", modulePath);
        // 模块名称 例子system.dept
        String moduleName = type.firstModule() + (type.secondModule().isEmpty()? "" : "." + type.secondModule());
        bindingMap.put("moduleName", moduleName);
        // 字典类型 下划线大写 例子SYSTEM_DATA_SCOPE
        bindingMap.put("typeUp", type.type().toUpperCase());
        // 字典类型 驼峰命名 例子SystemDataScope
        bindingMap.put("typeUpHump", upperFirst(toCamelCase(type.type())));
        long numberCount = type.datas().stream().filter(data-> StringUtil.isNumeric(data.value())).count();
        bindingMap.put("isNumber", (numberCount == type.datas().size() ? 1 : 0));
        return bindingMap;
    }


    private String tableFilePath(){
        String curDate = DateUtil.format(LocalDateTime.now(), "yyyyMMdd");
        String curMouth = DateUtil.format(LocalDateTime.now(), "yyyyMM");
        String curDay = DateUtil.format(LocalDateTime.now(), "dd");
        String filePath = FileUtil.getAbsolutePath("db/migration").replace("target/classes", "src/main/resources") + "/" + curMouth  + "/" + curDay;
        Integer curGitUserVersion = schemaHistory.getCurGitUserVersion();
        Integer curGitUserId = schemaHistory.getCurGitUserId();
        filePath = filePath + "/" + "V" + curDate + "_" + curGitUserId + "_" + String.format("%3d", curGitUserVersion + 1).replace(" ", "0") + ".sql";
        return filePath;
    }

    private static String templatePath(String path) {
        return "codegen/" + path + ".vm";
    }

    public void saveInsertSql(Object tableEntity){
        String sql = EntityUtils.getExecSql(tableEntity, "insert");
        saveDMLSql(sql);
    }

    public void saveUpdateSql(Object tableEntity){
        String sql = EntityUtils.getExecSql(tableEntity, "update");
        saveDMLSql(sql);
    }

    public void saveDeleteSql(String className, String id){
        String tableName;
        if(className.lastIndexOf(".") > 0){
            tableName = toSymbolCase(className.substring(className.lastIndexOf(".") + 1), '_');
        }else{
            return ;
        }
        String sql = "delete from " + tableName  + " where id = '" + id + "';\r\n";
        saveDMLSql(sql);
    }

    private void saveDMLSql(String sql){
        Integer curGitUserVersion = schemaHistory.getCurGitUserVersion();
        Integer curGitUserId = schemaHistory.getCurGitUserId();
        UpgradeUtils.upgradeSql(sql, curGitUserVersion, curGitUserId);
    }


}
