package com.xiyu.service.convert.system.dept;

import com.xiyu.service.vo.system.dept.dept.DeptGetOutput;
import com.xiyu.service.vo.system.dept.dept.DeptListAllSimpleOutput;
import com.xiyu.service.vo.system.dept.dept.DeptListOutput;
import com.xiyu.service.vo.system.dept.dept.DeptUpdateInput;
import com.xiyu.service.vo.system.dept.dept.DeptCreateInput;
import com.xiyu.service.model.system.dept.SystemDept;
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

    List<DeptListOutput> listOutputConvert(List<SystemDept> output);

}


