package cn.iocoder.yudao.service.service.infra.codegen.inner;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.map.MapUtil;
import cn.hutool.core.util.RuntimeUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.extra.template.TemplateConfig;
import cn.hutool.extra.template.TemplateEngine;
import cn.hutool.extra.template.engine.velocity.VelocityEngine;
import cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil;
import cn.iocoder.yudao.framework.common.pojo.CommonResult;
import cn.iocoder.yudao.framework.common.pojo.PageParam;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.framework.common.util.date.DateUtils;
import cn.iocoder.yudao.framework.common.util.date.LocalDateTimeUtils;
import cn.iocoder.yudao.framework.common.util.object.ObjectUtils;
import cn.iocoder.yudao.framework.excel.core.annotations.DictFormat;
import cn.iocoder.yudao.framework.excel.core.convert.DictConvert;
import cn.iocoder.yudao.framework.excel.core.util.ExcelUtils;
import cn.iocoder.yudao.framework.mybatis.core.dataobject.BaseDO;
import cn.iocoder.yudao.framework.mybatis.core.mapper.BaseMapperX;
import cn.iocoder.yudao.framework.mybatis.core.query.LambdaQueryWrapperX;
import cn.iocoder.yudao.framework.operatelog.core.annotations.OperateLog;
import cn.iocoder.yudao.framework.operatelog.core.enums.OperateTypeEnum;
import cn.iocoder.yudao.service.convert.infra.codegen.CodegenConvert;
import cn.iocoder.yudao.service.enums.infra.codegen.CodegenSceneEnum;
import cn.iocoder.yudao.service.framework.codegen.config.CodegenProperties;
import cn.iocoder.yudao.service.framework.codegen.config.SchemaHistory;
import cn.iocoder.yudao.service.model.infra.codegen.*;
import cn.iocoder.yudao.service.model.infra.data.InfraDictType;
import cn.iocoder.yudao.service.repository.infra.codegen.*;
import cn.iocoder.yudao.service.vo.infra.codegen.database.DatabaseUpdateReq;
import org.jsoup.internal.StringUtil;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.io.File;
import java.time.LocalDateTime;
import java.util.*;

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
            .put(templatePath("model/baseVO"), javaBaseVOFilePath("Base"))
            .put(templatePath("model/repository"), javaTableFilePath("repository","${classNameHump}Repository"))
            .put(templatePath("model/javaModel"), javaTableFilePath("model","${classNameHump}"))
            .put(templatePath("model/vueModel"), vueFilePath("model/${moduleName}/${table.secondModule}/${classNameHump}.ts"))
            .build();

    private static final Map<String, String> TABLE_UPDATE_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("model/baseVO"), javaBaseVOFilePath("Base"))
            .put(templatePath("model/javaModel"), javaTableFilePath("model","${classNameHump}"))
            .put(templatePath("model/vueModel"), vueFilePath("model/${moduleName}/${table.secondModule}/${classNameHump}.ts"))
            .build();

    private static final Map<String, String> MODULE_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("interfaceModule/controller"), javaControllerFilePath())
            .put(templatePath("interfaceModule/convert"), javaModuleFilePath("convert", "${nameHumpUp}Convert"))
            .put(templatePath("interfaceModule/serviceImpl"), javaModuleFilePath("service", "${nameHumpUp}ServiceImpl"))
            .put(templatePath("interfaceModule/service"), javaModuleFilePath("service", "${nameHumpUp}Service"))
            .put(templatePath("interfaceModule/vo"), javaModuleFilePath("vo", "${nameHump}/package-info"))
            .put(templatePath("interfaceModule/vueApi"), vueFilePath("api/${modulePath}/${vueFileName}.ts"))
            .build();

    private static final Map<String, String> DICT_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序
            .put(templatePath("dict/javaEnum"), javaApiFilePath("enums/${modulePath}/${typeUpHump}Enum.java"))
            .put(templatePath("dict/javaType"), javaApiFilePath("enums/DictTypeConstants.java"))
            .put(templatePath("dict/vueType"), vueFilePath("utils/dict.ts"))
            .put(templatePath("dict/vueEnum"), vueFilePath("utils/constants.ts"))
            .build();

    private static final Map<String, String> INTERFACE_TEMPLATES = MapUtil.<String, String>builder(new LinkedHashMap<>()) // 有序

            .put(templatePath("interface/controller"), javaFilePath("controller/${sceneEnum.basePackage}/${modulePath}/${moduleNameHumpUp}Controller")+ ".java")
            .put(templatePath("interface/convert"), javaModuleFilePath("convert", "${moduleNameHumpUp}Convert"))
            .put(templatePath("interface/serviceImpl"), javaModuleFilePath("service", "${moduleNameHumpUp}ServiceImpl"))
            .put(templatePath("interface/service"), javaModuleFilePath("service", "${moduleNameHumpUp}Service"))
            .put(templatePath("interface/voInput"), javaModuleFilePath("vo", "${moduleNameHump}/${moduleNameHumpUp}${interfaceNameHumpUp}Input"))
            .put(templatePath("interface/voOutput"), javaModuleFilePath("vo", "${moduleNameHump}/${moduleNameHumpUp}${interfaceNameHumpUp}Output"))
            .put(templatePath("interface/vueApi"), vueFilePath("api/${modulePath}/${vueFileName}.ts"))
            .build();


    @Resource
    private CodegenProperties codegenProperties;

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

    @PostConstruct
    private void initGlobalBindingMap() {
        // 全局配置
        globalBindingMap.put("basePackage", codegenProperties.getBasePackage());
        globalBindingMap.put("baseFrameworkPackage", codegenProperties.getBasePackage()
                + '.' + "framework"); // 用于后续获取测试类的 package 地址
        // 全局 Java Bean
        globalBindingMap.put("CommonResultClassName", CommonResult.class.getName());
        globalBindingMap.put("PageResultClassName", PageResult.class.getName());
        // VO 类，独有字段
        globalBindingMap.put("PageParamClassName", PageParam.class.getName());
        globalBindingMap.put("DictFormatClassName", DictFormat.class.getName());
        // DO 类，独有字段
        globalBindingMap.put("BaseDOClassName", BaseDO.class.getName());
        globalBindingMap.put("QueryWrapperClassName", LambdaQueryWrapperX.class.getName());
        globalBindingMap.put("BaseMapperClassName", BaseMapperX.class.getName());
        // Util 工具类
        globalBindingMap.put("ServiceExceptionUtilClassName", ServiceExceptionUtil.class.getName());
        globalBindingMap.put("DateUtilsClassName", DateUtils.class.getName());
        globalBindingMap.put("ExcelUtilsClassName", ExcelUtils.class.getName());
        globalBindingMap.put("LocalDateTimeUtilsClassName", LocalDateTimeUtils.class.getName());
        globalBindingMap.put("ObjectUtilsClassName", ObjectUtils.class.getName());
        globalBindingMap.put("DictConvertClassName", DictConvert.class.getName());
        globalBindingMap.put("OperateLogClassName", OperateLog.class.getName());
        globalBindingMap.put("OperateTypeEnumClassName", OperateTypeEnum.class.getName());
    }

    private void convertParams(List<CodegenInterfaceParam> params){
        for(CodegenInterfaceParam param : params)
        {
            if(Objects.equals(param.getVariableType(), "VOClass")) {
                InfraInterfaceVoClass voClass = infraInterfaceVoClassRepository.findById(UUID.fromString(param.getRelatedId())).get();
                param.setVariableType(voClass.name());
            }
            if(Objects.equals(param.getVariableType(), "Subclass")) {
                InfraInterfaceSubclass subclass = infraInterfaceSubclassRepository.findById(UUID.fromString(param.getRelatedId())).get();
                param.setVariableType(subclass.name());
            }
            param.setHumpName(toCamelCase(param.getName()));
        }
    }

    private String srcExtendClass(UUID id){
        Optional<InfraInterfaceVoClass> opVoClass = infraInterfaceVoClassRepository.findById(id);
        if(!opVoClass.isPresent())
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
        if(!opVoClass.isPresent())
            return "";
        if(opVoClass.get().type() == 0) {
            InfraDatabaseTable table = infraDatabaseTableRepository.findById(UUID.fromString(opVoClass.get().parentId())).get();
            extendClassImport = new StringBuilder("import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                    ".service.vo." +
                    table.firstModule() +
                    "." +
                    table.secondModule() +
                    ".baseVO." +
                    upperFirst(toCamelCase((table.name()))) +
                    "Base"+
                    ";");
        }else{
            InfraInterface infraInterface = infraInterfaceRepository.findById(UUID.fromString(opVoClass.get().parentId())).get();
            List<String> parentNames = getParentName(Objects.requireNonNull(infraInterface.module()).id());
            parentNames.remove(0);
            extendClassImport = new StringBuilder("import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                    ".service.vo.");
            for(String parentName : parentNames){
                extendClassImport.append(".").append(parentName);
            }
            InfraInterfaceModule infraInterfaceModule =  infraInterfaceModuleRepository.findById(infraInterface.moduleId()).get();
            extendClassImport.append(".").append(toCamelCase(infraInterfaceModule.name())).append(";");
        }
        return extendClassImport.toString();
    }

    private Map<String, Object> getInterfaceBindingMap(InfraInterface infraInterface){
        Map<String, Object> bindingMap = new HashMap<>(globalBindingMap);
        InfraInterfaceModule infraInterfaceModule =  infraInterfaceModuleRepository.findById(infraInterface.moduleId()).get();
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
        // 接口模块名驼峰 首字母小写
        bindingMap.put("moduleNameHump", moduleNameHump);
        // 接口名模块驼峰 首字母大写
        bindingMap.put("moduleNameHumpUp", moduleNameHumpUp);
        bindingMap.put("moduleNameSymbol", moduleNameSymbol);
        bindingMap.put("modulePath", String.join("/", parentNames));
        String vueFileName = moduleNameHump;
        String vueModulePath = String.join("/", parentNames);
        if(parentNames.get(parentNames.size()-1).equals(moduleNameHump)) {
            vueModulePath = vueModulePath.substring(0, vueModulePath.length() - moduleNameHump.length() - 1);
            vueFileName = "index";
        }
        bindingMap.put("vueModulePath", vueModulePath);
        bindingMap.put("vueFileName", vueFileName);
        List<CodegenInterfaceParam> inputParams = CodegenConvert.INSTANCE.convertList19(infraInterface.inputParams());
        convertParams(inputParams);
        bindingMap.put("inputParams", inputParams);

        List<CodegenInterfaceParam> outputParams = CodegenConvert.INSTANCE.convertList19(infraInterface.outputParams());
        convertParams(outputParams);
        bindingMap.put("outputParams", outputParams);

        List<String> controllerImportList = new ArrayList<>();
        List<String> convertImportList = new ArrayList<>();
        List<String> inputImportList = new ArrayList<>();
        List<String> outputImportList = new ArrayList<>();

        List<CodegenInterfaceSubclass> inputSubclasses = CodegenConvert.INSTANCE.convertList20(infraInterface.inputSubclasses());
        for(CodegenInterfaceSubclass inputSubclass : inputSubclasses){
            convertParams(inputSubclass.getSubclassParams());
            if(!inputSubclass.getInheritClass().isEmpty()){
                String inputSubExtendClassImport = getExtendClassImport(inputSubclass.getInheritClass(), bindingMap);
                if(!inputSubExtendClassImport.isEmpty())
                    inputImportList.add(inputSubExtendClassImport);
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
        String inputSrcExtendClass = "";
        String inputSrcExtendTableImport = "";
        String inputExtendClassImport = "";
        if(!infraInterface.inputExtendClass().isEmpty()) {
            InfraInterfaceVoClass voClass = infraInterfaceVoClassRepository.findByName(infraInterface.inputExtendClass()).get();
            if (Objects.equals(voClass.name(), "PageParam")){
                inputExtendClassImport = "import "+ PageParam.class.getName() +";";
            }else {
                inputSrcExtendClass = srcExtendClass(voClass.id());

                InfraDatabaseTable table = infraDatabaseTableRepository.findByName(inputSrcExtendClass).get();
                inputSrcExtendTableImport = "import " +
                        getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                        ".service.model." +
                        table.firstModule() +
                        "." +
                        table.secondModule() +
                        "." +
                        upperFirst(toCamelCase(inputSrcExtendClass))
                        + ";";
                inputSrcExtendClass = upperFirst(toCamelCase(inputSrcExtendClass));

                inputExtendClassImport = getExtendClassImport(infraInterface.inputExtendClass(), bindingMap);
            }
            convertImportList.add(inputSrcExtendTableImport);
            inputImportList.add(inputExtendClassImport);
        }
        bindingMap.put("inputSrcExtendClass", inputSrcExtendClass);


        String outputSrcExtendClass = "";
        String outputSrcExtendTableImport = "";
        String outputExtendClassImport = "";
        if(!infraInterface.outputExtendClass().isEmpty()) {
            InfraInterfaceVoClass voClass = infraInterfaceVoClassRepository.findByName(infraInterface.outputExtendClass()).get();
            outputSrcExtendClass = srcExtendClass(voClass.id());

            InfraDatabaseTable table = infraDatabaseTableRepository.findByName(outputSrcExtendClass).get();
            outputSrcExtendTableImport = "import " +
                    getStr(bindingMap, "basePackage").replaceAll("\\.", ".") +
                    ".service.model." +
                    table.firstModule()+
                    "."+
                    table.secondModule()+
                    "."+
                    upperFirst(toCamelCase(outputSrcExtendClass)) +
                    ";";
            outputSrcExtendClass = upperFirst(toCamelCase(outputSrcExtendClass));
            outputExtendClassImport = getExtendClassImport(infraInterface.outputExtendClass(), bindingMap);
            convertImportList.add(outputSrcExtendTableImport);
            outputImportList.add(outputExtendClassImport);
        }
        bindingMap.put("outputSrcExtendClass", outputSrcExtendClass);


        // input
        String input = "";
        String inputVar = "inputVO";
        String inputRequest = "";
        String inputValid = "";
        String inputSingleParam = "";
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
            input =  moduleNameHumpUp + upperFirst(interfaceNameHump) + "Input";

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
        }
        bindingMap.put("interfaceInput", input);
        bindingMap.put("interfaceInputVar", inputVar);
        bindingMap.put("interfaceInputRequest", inputRequest);
        bindingMap.put("interfaceInputValid", inputValid);
        bindingMap.put("interfaceInputSingleParam", inputSingleParam);

        // output
        String output = "";
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
        }
        bindingMap.put("interfaceOutput", output);

        bindingMap.put("controllerImportList", controllerImportList);
        bindingMap.put("convertImportList", convertImportList);
        bindingMap.put("inputImportList", inputImportList);
        bindingMap.put("outputImportList", outputImportList);

        return bindingMap;
    }

    private void fileInsertImport(StringBuilder fileContent, List<String> importList) {
        int importIndex = fileContent.indexOf("import");
        for(String strImport : importList) {
            if(fileContent.indexOf(strImport) < 0)
                fileContent.insert(importIndex, strImport + "\r\n");
        }
    }

    public void interfaceInsert(UUID interfaceId){
        InfraInterface infraInterface = infraInterfaceRepository.findDetailById(interfaceId).get();
        Map<String, Object> bindingMap = getInterfaceBindingMap(infraInterface);

        List<String> controllerImportList = Convert.toList(String.class, bindingMap.get("controllerImportList"));
        List<String> convertImportList = Convert.toList(String.class, bindingMap.get("convertImportList"));
        List<String> inputImportList = Convert.toList(String.class, bindingMap.get("inputImportList"));
        List<String> outputImportList = Convert.toList(String.class, bindingMap.get("outputImportList"));


        Map<String, String> templates = new LinkedHashMap<>(INTERFACE_TEMPLATES);
        for(Map.Entry<String, String> entry : templates.entrySet()){
            String vmPath = entry.getKey();
            String filePath = entry.getValue();
            if (vmPath.contains("voInput")
                    && (Objects.equals(infraInterface.inputType(), "void") || Objects.equals(infraInterface.inputType(), "param")))
                continue;
            if (vmPath.contains("voOutput")
                    && (Objects.equals(infraInterface.outputType(), "void") || Objects.equals(infraInterface.outputType(), "param")))
                continue;
            filePath = formatInterfaceFilePath(filePath, bindingMap);
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

            String interfaceContent = "";
            if(!vmPath.isEmpty()) {
                interfaceContent = templateEngine.getTemplate(vmPath).render(bindingMap);
                // 去除字段后面多余的 , 逗号
                interfaceContent = interfaceContent.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");

                StringBuilder fileContent = new StringBuilder(FileUtil.readUtf8String(newFile));
                int index = fileContent.lastIndexOf("\r\n}");
                // vue前端代码直接追究 java代码要放到最后一个}前
                if(index > 0 && !vmPath.contains("vueApi")) {
                    fileContent.insert(index, interfaceContent);
                }else {
                    fileContent.append(interfaceContent);
                }
                if(vmPath.contains("convert") && !convertImportList.isEmpty())
                    fileInsertImport(fileContent, convertImportList);

                if((vmPath.contains("serviceImpl") || vmPath.contains("service") || vmPath.contains("controller"))
                        && !controllerImportList.isEmpty())
                    fileInsertImport(fileContent, controllerImportList);

                if(vmPath.contains("voInput") && !inputImportList.isEmpty())
                    fileInsertImport(fileContent, inputImportList);

                if(vmPath.contains("voOutput") && !outputImportList.isEmpty())
                    fileInsertImport(fileContent, outputImportList);

                FileUtil.writeUtf8String(fileContent.toString(), newFile);

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

        Map<String, String> templates = new LinkedHashMap<>(INTERFACE_TEMPLATES);
        for(Map.Entry<String, String> entry : templates.entrySet()){
            String vmPath = entry.getKey();
            String filePath = entry.getValue();
            // 删除旧的传入传出参数类
            if (vmPath.contains("voInput")) {
                filePath = formatInterfaceFilePath(filePath, oldBindingMap);
                if(FileUtil.exist(filePath)) {
                    RuntimeUtil.execForStr("git rm -f " + filePath);
                }
                if (Objects.equals(newInterface.inputType(), "void") || Objects.equals(newInterface.inputType(), "param"))
                    continue;
            }
            if (vmPath.contains("voOutput")) {
                filePath = formatInterfaceFilePath(filePath, oldBindingMap);
                if(FileUtil.exist(filePath)) {
                    RuntimeUtil.execForStr("git rm -f " + filePath);
                }
                if(Objects.equals(newInterface.outputType(), "void") || Objects.equals(newInterface.outputType(), "param"))
                    continue;
            }
            filePath = formatInterfaceFilePath(entry.getValue(), newBindingMap);
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

            String newInterfaceContent = "";
            String oldInterfaceContent = "";
            if(!vmPath.isEmpty()) {
                newInterfaceContent = templateEngine.getTemplate(vmPath).render(newBindingMap);
                oldInterfaceContent = templateEngine.getTemplate(vmPath).render(oldBindingMap);
                // 去除字段后面多余的 , 逗号
                newInterfaceContent = newInterfaceContent.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");
                // 去除字段后面多余的 , 逗号
                oldInterfaceContent = oldInterfaceContent.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");

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

    private String formatInterfaceFilePath(String filePath, Map<String, Object> bindingMap) {
        filePath = StrUtil.replace(filePath, "${basePackage}",
                getStr(bindingMap, "basePackage").replaceAll("\\.", "/"));
        // sceneEnum 包含的字段
        CodegenSceneEnum sceneEnum = (CodegenSceneEnum) bindingMap.get("sceneEnum");
        filePath = StrUtil.replace(filePath, "${sceneEnum.prefixClass}", sceneEnum.getPrefixClass());
        filePath = StrUtil.replace(filePath, "${sceneEnum.basePackage}", sceneEnum.getBasePackage());
        filePath = StrUtil.replace(filePath, "${nameHump}", getStr(bindingMap, "nameHump"));
        filePath = StrUtil.replace(filePath, "${moduleNameHump}", getStr(bindingMap, "moduleNameHump"));
        filePath = StrUtil.replace(filePath, "${moduleNameHumpUp}", getStr(bindingMap, "moduleNameHumpUp"));
        filePath = StrUtil.replace(filePath, "${interfaceNameHumpUp}", getStr(bindingMap, "interfaceNameHumpUp"));
        filePath = StrUtil.replace(filePath, "${modulePath}", getStr(bindingMap, "modulePath"));
        filePath = StrUtil.replace(filePath, "${vueModulePath}", getStr(bindingMap, "vueModulePath"));
        filePath = StrUtil.replace(filePath, "${vueFileName}", getStr(bindingMap, "vueFileName"));

        return filePath;
    }

    public void moduleInsertExecute(InfraInterfaceModule module){
        Map<String, Object> bindingMap = getModuleBindingMap(module);
        generateModule(bindingMap);
    }

    private String moduleUpdateContent(String content, InfraInterfaceModule oldModule, InfraInterfaceModule newModule){
        String oldName = oldModule.name();
        String oldHumpName = upperFirst(oldName);
        String oldComment = oldModule.comment();
        String newName = newModule.name();
        String newHumpName = upperFirst(newName);
        String newComment = newModule.comment();
        content = content.replace("\\" + oldName, "\\" + newName)
                .replace(oldName + "Service", newName + "Service")
                .replace(oldHumpName + "Service", newHumpName + "Service")
                .replace(oldHumpName + "Controller", newHumpName + "Controller")
                .replace("\"" + oldComment + "\"", "\"" + newComment + "\"")
                .replace(oldHumpName + "Convert", newHumpName + "Convert");

        return content;
    }

    public void moduleUpdateExecute(InfraInterfaceModule oldModule, InfraInterfaceModule newModule){
        Map<String, Object> oldBindingMap = getModuleBindingMap(oldModule);
        Map<String, Object> newBindingMap = getModuleBindingMap(newModule);
        Map<String, String> templates = new LinkedHashMap<>(MODULE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            String oldFilePath = formatModuleFilePath(filePath, oldBindingMap);
            String newFilePath = formatModuleFilePath(filePath, newBindingMap);
            if(!FileUtil.exist(oldFilePath))
                return;
            String content = FileUtil.readUtf8String(oldFilePath);
            content = moduleUpdateContent(content, oldModule, newModule);
            RuntimeUtil.execForStr("git mv " + oldFilePath + " " + newFilePath);
            File newFile = FileUtil.file(newFilePath);
            FileUtil.writeUtf8String(content, newFile);
        });

    }

    public void moduleDeleteExecute(InfraInterfaceModule module){
        Map<String, Object> bindingMap = getModuleBindingMap(module);
        Map<String, String> templates = new LinkedHashMap<>(MODULE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = formatModuleFilePath(filePath, bindingMap);
            RuntimeUtil.execForStr("git rm -f " + filePath);
        });
    }

    private Map<String, Object> getModuleBindingMap(InfraInterfaceModule module){
        Map<String, Object> bindingMap = new HashMap<>(globalBindingMap);

        bindingMap.put("sceneEnum", CodegenSceneEnum.valueOf("ADMIN"));
        bindingMap.put("module", module);
        List<String> parentNames = getParentName(module.id());
        // 去掉自身的name
        parentNames.remove(0);
        Collections.reverse(parentNames);
        bindingMap.put("parentNames", parentNames);
        bindingMap.put("nameSymbol", toSymbolCase(module.name(),'-'));
        bindingMap.put("nameHumpUp", upperFirst(module.name()));
        bindingMap.put("nameHump", 	module.name());
        bindingMap.put("modulePath", String.join("/", parentNames));
        String vueFileName = module.name();
        String vueModulePath = String.join("/", parentNames);
        if(parentNames.get(parentNames.size()-1).equals(module.name())) {
            vueModulePath = vueModulePath.substring(0, vueModulePath.length() - module.name().length() - 1);
            vueFileName = "index";
        }
        bindingMap.put("vueModulePath", vueModulePath);
        bindingMap.put("vueFileName", vueFileName);
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
            filePath = formatModuleFilePath(filePath, bindingMap);
            File newFile;
            if(!FileUtil.exist(filePath)) {
                newFile = FileUtil.touch(filePath);
                RuntimeUtil.execForStr("git add " + filePath);
            }else{
                newFile = FileUtil.file(filePath);
            }

            String content = "";
            if(!vmPath.isEmpty()) {
                content = templateEngine.getTemplate(vmPath).render(bindingMap);
                // 去除字段后面多余的 , 逗号
                content = content.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");

                FileUtil.writeUtf8String(content, newFile);
            }
        });
    }

    private String formatModuleFilePath(String filePath, Map<String, Object> bindingMap) {
        filePath = StrUtil.replace(filePath, "${basePackage}",
                getStr(bindingMap, "basePackage").replaceAll("\\.", "/"));
        // sceneEnum 包含的字段
        CodegenSceneEnum sceneEnum = (CodegenSceneEnum) bindingMap.get("sceneEnum");
        filePath = StrUtil.replace(filePath, "${sceneEnum.prefixClass}", sceneEnum.getPrefixClass());
        filePath = StrUtil.replace(filePath, "${sceneEnum.basePackage}", sceneEnum.getBasePackage());
        filePath = StrUtil.replace(filePath, "${nameHump}", getStr(bindingMap, "nameHump"));
        filePath = StrUtil.replace(filePath, "${nameHumpUp}", getStr(bindingMap, "nameHumpUp"));
        filePath = StrUtil.replace(filePath, "${modulePath}", getStr(bindingMap, "modulePath"));
        filePath = StrUtil.replace(filePath, "${vueModulePath}", getStr(bindingMap, "vueModulePath"));
        filePath = StrUtil.replace(filePath, "${vueFileName}", getStr(bindingMap, "vueFileName"));
        InfraInterfaceModule module = (InfraInterfaceModule) bindingMap.get("module");
        filePath = StrUtil.replace(filePath, "${module.name}", module.name());

        return filePath;
    }

    public void generateInsertTable(Map<String, Object> bindingMap)
    {
        Map<String, String> templates = new LinkedHashMap<>(TABLE_INSERT_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = formatTableFilePath(filePath, bindingMap);
            String content = templateEngine.getTemplate(vmPath).render(bindingMap);
            // 去除字段后面多余的 , 逗号
            content = content.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");
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
        String vmPath = "codegen/model/newTable.vm";
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
        // 生成repository
        vmPath = templatePath("model/repository");
        filePath = javaTableFilePath("repository","${classNameHump}Repository");
        filePath = formatTableFilePath(filePath, bindingMap);
        content = templateEngine.getTemplate(vmPath).render(bindingMap);
        // 去除字段后面多余的 , 逗号
        content = content.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");
        if(!FileUtil.exist(filePath)) {
            newFile = FileUtil.touch(filePath);
            RuntimeUtil.execForStr("git add " + filePath);
            FileUtil.writeUtf8String(content, newFile);
        }
    }

    public void generateUpdateTable(Map<String, Object> bindingMap)
    {
        Map<String, String> templates = new LinkedHashMap<>(TABLE_UPDATE_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            filePath = formatTableFilePath(filePath, bindingMap);
            String content = templateEngine.getTemplate(vmPath).render(bindingMap);
            // 去除字段后面多余的 , 逗号
            content = content.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");
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

    public void tableUpdateExecute(InfraDatabaseTable table, DatabaseUpdateReq reqVo, String updateSql){
        Map<String, Object> bindingMap = getTableBindingMap(table);
        generateUpdateTable(bindingMap);
        generateUpdateTable(updateSql);
        if (!Objects.equals(table.name(), reqVo.getName())){
            deleteOldTableFile(reqVo);
        }
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

    private void deleteOldTableFile(DatabaseUpdateReq reqVo){

    }

    private Map<String, Object> getTableBindingMap(InfraDatabaseTable table){
        Map<String, Object> bindingMap = new HashMap<>(globalBindingMap);
        List<CodegenDatabaseColumn> codegenColumns = CodegenConvert.INSTANCE.convertList09(table.columns());
        for(CodegenDatabaseColumn column : codegenColumns)
        {
            if(!column.getRelatedTable().isEmpty()) {
                Optional<InfraDatabaseTable> opTable = infraDatabaseTableRepository.findByName(column.getRelatedTable());
                column.setHumpRelatedTable(upperFirst(toCamelCase(column.getRelatedTable())))
                        .setRelatedTableModuleName(opTable.get().secondModule());
            }
            if(Objects.equals(column.getJavaType(), "Long")
                    || Objects.equals(column.getJavaType(), "String")
                    || Objects.equals(column.getJavaType(), "Double")
                    || Objects.equals(column.getJavaType(), "BigDecimal")
                    || Objects.equals(column.getJavaType(), "UUID")){
                column.setVueDataType("string");
            } else if(Objects.equals(column.getJavaType(), "LocalDateTime") ){
                column.setVueDataType("Date");
            }else if(Objects.equals(column.getJavaType(), "Integer") ){
                column.setVueDataType("number");
            }else if(Objects.equals(column.getJavaType(), "Boolean") ){
                column.setVueDataType("boolean");
            }else if(Objects.equals(column.getJavaType(), "List<String>") || Objects.equals(column.getJavaType(), "List<Long>")){
                column.setVueDataType("string[]");
            } else if(Objects.equals(column.getJavaType(), "Map<String, Object>") ) {
                column.setVueDataType("Map<String, Object>");
            }
            column.setHumpName(toCamelCase(column.getColumnName()));
        }
        List<CodegenDatabaseMapping> codegenMappings = CodegenConvert.INSTANCE.convertList16(table.mappings());
        for(CodegenDatabaseMapping mapping : codegenMappings)
        {
            mapping.setHumpMappingTable(upperFirst(toCamelCase(mapping.getMappingTable())));
        }
        bindingMap.put("table", table);
        bindingMap.put("columns", codegenColumns);
        bindingMap.put("indexes", table.indexes());
        bindingMap.put("mappings", codegenMappings);
        bindingMap.put("sceneEnum", CodegenSceneEnum.valueOf("ADMIN"));
        // 模块名称 例子system
        String moduleName = table.firstModule();
        bindingMap.put("moduleName", moduleName);
        // 简称类名 下划线命名 例子config_setting
        String simpleClassName = removePrefix(table.name(), moduleName+ "_");
        bindingMap.put("simpleClassName", simpleClassName );
        // 简称类名 驼峰命名 例子ConfigSetting
        bindingMap.put("simpleClassNameHump", upperFirst(toCamelCase(simpleClassName)));

        // 简称类名 驼峰命名 首字母小写 例子configSetting
        bindingMap.put("simpleLowerClassNameHump", toCamelCase(simpleClassName));

        // 全程类名 驼峰命名 例子SystemConfigSetting
        bindingMap.put("classNameHump", upperFirst(toCamelCase(table.name())));
        return bindingMap;
    }

    private String formatTableFilePath(String filePath, Map<String, Object> bindingMap) {
        filePath = StrUtil.replace(filePath, "${basePackage}",
                getStr(bindingMap, "basePackage").replaceAll("\\.", "/"));
        filePath = StrUtil.replace(filePath, "${classNameVar}",
                getStr(bindingMap, "classNameVar"));
        filePath = StrUtil.replace(filePath, "${simpleClassName}",
                getStr(bindingMap, "simpleClassName"));
        // sceneEnum 包含的字段
        CodegenSceneEnum sceneEnum = (CodegenSceneEnum) bindingMap.get("sceneEnum");
        filePath = StrUtil.replace(filePath, "${sceneEnum.prefixClass}", sceneEnum.getPrefixClass());
        filePath = StrUtil.replace(filePath, "${sceneEnum.basePackage}", sceneEnum.getBasePackage());
        // table 包含的字段
        InfraDatabaseTable table = (InfraDatabaseTable) bindingMap.get("table");
        filePath = StrUtil.replace(filePath, "${moduleName}", getStr(bindingMap, "moduleName"));
        filePath = StrUtil.replace(filePath, "${table.secondModule}", table.secondModule());
        filePath = StrUtil.replace(filePath, "${simpleClassNameHump}", getStr(bindingMap, "simpleClassNameHump"));
        filePath = StrUtil.replace(filePath, "${simpleLowerClassNameHump}", getStr(bindingMap, "simpleLowerClassNameHump"));
        filePath = StrUtil.replace(filePath, "${classNameHump}", getStr(bindingMap, "classNameHump"));
        return filePath;
    }

    public void dictUpdateExecute(InfraDictType oldType, InfraDictType newType){
        Map<String, Object> oldBindingMap = getDictBindingMap(oldType);
        Map<String, Object> newBindingMap = getDictBindingMap(newType);
        Map<String, String> templates = new LinkedHashMap<>(DICT_TEMPLATES);
        templates.forEach((vmPath, filePath) -> {
            String oldFilePath = formatDictFilePath(filePath, oldBindingMap);
            String newFilePath = formatDictFilePath(filePath, newBindingMap);
//            if(!FileUtil.exist(oldFilePath))
//                return;
            String oldContent = templateEngine.getTemplate(vmPath).render(oldBindingMap);
            String newContent = templateEngine.getTemplate(vmPath).render(newBindingMap);
            if(oldContent.equals(newContent) && oldType.firstModule().equals(newType.firstModule()) && oldType.secondModule().equals(newType.secondModule()))
                return;
            if(filePath.contains("Enum.java")){
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
                if(filePath.contains("dict.ts")){
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
                insertNewDict(newType, newFilePath, newContent);
            }
        });

    }

    private void insertNewDict(InfraDictType type, String filePath, String content){
        File file = FileUtil.file(filePath);
        String firstModuleMatch = "// ========== " + type.firstModule().toUpperCase() + " 模块 ==========\r\n";
        if(FileUtil.exist(filePath)) {
            StringBuilder fileContent = new StringBuilder(FileUtil.readUtf8String(filePath));
            if(fileContent.indexOf(firstModuleMatch) > 0){
                fileContent.insert(fileContent.indexOf(firstModuleMatch) +  firstModuleMatch.length(), content + "\r\n");
            }else{
                // 追加空格
                if(filePath.contains("dict.ts"))
                    firstModuleMatch = "  " + firstModuleMatch;
                if(filePath.contains("DictTypeConstants.java"))
                    firstModuleMatch = "    " + firstModuleMatch;
                // 查找插入位置 不同的文件 插入位置不同
                int insertIndex = 0;
                if (filePath.contains("DictTypeConstants.java")){
                    insertIndex = fileContent.lastIndexOf("}");
                    content = content + "\r\n";
                }
                else if(filePath.contains("dict.ts")){
                    String dictType = fileContent.substring(0, fileContent.indexOf("}",fileContent.indexOf("export enum DICT_TYPE {")));
                    insertIndex = dictType.lastIndexOf("'") + 1;
                    firstModuleMatch = "\r\n\r\n" + firstModuleMatch;
                    firstModuleMatch = "," + firstModuleMatch;
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
        templates.forEach((vmPath, filePath) -> {
            filePath = formatDictFilePath(filePath, bindingMap);
            String content = templateEngine.getTemplate(vmPath).render(bindingMap);
            // 去除字段后面多余的 , 逗号
            content = content.replaceAll(",\n}", "\n}").replaceAll(",\n  }", "\n  }");
            // constants文件只插入 enum文件新建
            if(!filePath.contains("Enum.java")){
                insertNewDict(type, filePath, content);
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

    private String formatDictFilePath(String filePath, Map<String, Object> bindingMap) {
        filePath = StrUtil.replace(filePath, "${basePackage}",
                getStr(bindingMap, "basePackage").replaceAll("\\.", "/"));
        filePath = StrUtil.replace(filePath, "${modulePath}",
                getStr(bindingMap, "modulePath"));
        filePath = StrUtil.replace(filePath, "${typeUpHump}",
                getStr(bindingMap, "typeUpHump"));
        // sceneEnum 包含的字段
        CodegenSceneEnum sceneEnum = (CodegenSceneEnum) bindingMap.get("sceneEnum");
        filePath = StrUtil.replace(filePath, "${sceneEnum.prefixClass}", sceneEnum.getPrefixClass());
        filePath = StrUtil.replace(filePath, "${sceneEnum.basePackage}", sceneEnum.getBasePackage());
        return filePath;
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

    private static String javaBaseVOFilePath(String path) {
        return javaFilePath("vo/${moduleName}/${table.secondModule}/${sceneEnum.prefixClass}baseVO/${classNameHump}" + path) + ".java";
    }

    private static String javaControllerFilePath() {
        return javaFilePath("controller/${sceneEnum.basePackage}/${modulePath}/${nameHumpUp}Controller")+ ".java";
    }

    private static String javaTableFilePath(String path, String file) {
        return javaFilePath(path) +  "/${moduleName}/${table.secondModule}/" + file + ".java";
    }

    private static String javaModuleFilePath(String path, String file) {
        return javaFilePath(path) +  "/${modulePath}/" + file + ".java";
    }


    private static String javaFilePath(String path) {
        return FileUtil.getParent(FileUtil.getAbsolutePath(""), 3) + "/yudao-service/yudao-service-biz/src/main/java/${basePackage}/service/" + path;
    }

    private static String javaApiFilePath(String path) {
        return FileUtil.getParent(FileUtil.getAbsolutePath(""), 3) + "/yudao-service/yudao-service-api/src/main/java/${basePackage}/service/" + path;
    }

    private static String vueFilePath(String path) {
        return FileUtil.getParent(FileUtil.getAbsolutePath(""), 4) + "/frontend/src/"  + path;
    }

}
