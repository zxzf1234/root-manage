package com.xiyu.service.enums.infra.codegen;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
* 不需要代码生成的函数
*/
@Getter
@AllArgsConstructor
public enum InfraCodegenExcludeFunctionEnum {

    /**
    * 字典编号生成编号
    */
    DICTNOSERVICEIMPLPRODUCENO("DictNoServiceImpl.produceNo");

    private final String value;

}
