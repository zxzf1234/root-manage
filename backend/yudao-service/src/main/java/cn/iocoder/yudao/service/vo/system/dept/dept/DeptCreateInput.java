package cn.iocoder.yudao.service.vo.system.dept.dept;

import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemDeptBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;

@Schema(description = "创建部门")
@Data
public class DeptCreateInput extends SystemDeptBase {

}