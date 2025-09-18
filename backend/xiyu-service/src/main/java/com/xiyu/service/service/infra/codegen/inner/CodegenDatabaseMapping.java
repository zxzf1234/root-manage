package com.xiyu.service.service.infra.codegen.inner;

import lombok.Data;

@Data
public class CodegenDatabaseMapping {
    private String name;

    private Boolean isList;

    private String annotate;

    private String mappingTable;

    private String humpMappingTable;

    private String mappingVariableType;

    private String firstModule;

    private String secondModule;
}
