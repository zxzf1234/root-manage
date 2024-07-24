package cn.iocoder.yudao.service.convert.system.dept;

import cn.iocoder.yudao.service.vo.system.dept.dept.DeptGetOutput;
import cn.iocoder.yudao.service.model.infra.data.InfraDictData;
import cn.iocoder.yudao.service.vo.system.dept.dept.DeptListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.dept.dept.DeptListInput;
import cn.iocoder.yudao.service.vo.system.dept.dept.DeptListOutput;
import cn.iocoder.yudao.service.vo.system.dept.dept.DeptUpdateInput;
import cn.iocoder.yudao.service.vo.system.dept.dept.DeptCreateInput;
import cn.iocoder.yudao.service.model.system.dept.SystemDept;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface DeptConvert {

    DeptConvert INSTANCE = Mappers.getMapper(DeptConvert.class);


    SystemDept createInputConvert(DeptCreateInput input);

    SystemDept updateInputConvert(DeptUpdateInput input);

    List<DeptListOutput> listListOutputConvert(List<SystemDept> output);

    List<DeptListAllSimpleOutput> listAllSimpleListOutputConvert(List<SystemDept> output);

    DeptGetOutput getOutputConvert(SystemDept output);

}


