package com.xiyu.service.service.infra.codegen.inner;

import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class CodegenInterfaceSubclass {
    private UUID parentId;

    private String name;

    private String comment;

    private String inheritClass;

    private Integer inheritType;

    private Integer type;

    private List<CodegenInterfaceParam> subclassParams;
}
