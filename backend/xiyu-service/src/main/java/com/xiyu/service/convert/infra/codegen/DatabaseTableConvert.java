package com.xiyu.service.convert.infra.codegen;

import com.xiyu.service.vo.infra.codegen.databaseTable.DatabaseTableGetColumnByNamesOutput;
import com.xiyu.service.model.infra.codegen.InfraDatabaseColumn;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * 数据库表 Convert
 */
@Mapper
public interface DatabaseTableConvert {
    DatabaseTableConvert INSTANCE = Mappers.getMapper(DatabaseTableConvert.class);


    List<DatabaseTableGetColumnByNamesOutput> getColumnByNamesOutputConvert(List<InfraDatabaseColumn> output);

}
