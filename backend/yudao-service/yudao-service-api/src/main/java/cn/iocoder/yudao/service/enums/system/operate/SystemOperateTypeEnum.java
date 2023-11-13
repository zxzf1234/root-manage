package cn.iocoder.yudao.service.enums.system.operate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 操作类型
*/
@Getter
@AllArgsConstructor
public enum SystemOperateTypeEnum implements IntArrayValuable {

    /**
    * 其它
    */
    OTHER(0),
    /**
    * 查询
    */
    QUERY(1),
    /**
    * 新增
    */
    INSERT(2),
    /**
    * 修改
    */
    MODIFY(3),
    /**
    * 删除
    */
    DELETE(4),
    /**
    * 导出
    */
    EXPORT(5),
    /**
    * 导入
    */
    IMPORT(6);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemOperateTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
