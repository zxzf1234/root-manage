package cn.iocoder.yudao.service.convert.infra.codegen;

import cn.iocoder.yudao.service.vo.infra.codegen.databaseTable.DatabaseTableGetColumnByNamesInput;
import cn.iocoder.yudao.service.vo.infra.codegen.databaseTable.DatabaseTableGetColumnByNamesOutput;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseColumn;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.babyfish.jimmer.Page;

/**
 * 数据库表 Convert
 */
@Mapper
public interface DatabaseTableConvert {
    DatabaseTableConvert INSTANCE = Mappers.getMapper(DatabaseTableConvert.class);


    List<DatabaseTableGetColumnByNamesOutput> getColumnByNamesOutputConvert(List<InfraDatabaseColumn> output);

}
