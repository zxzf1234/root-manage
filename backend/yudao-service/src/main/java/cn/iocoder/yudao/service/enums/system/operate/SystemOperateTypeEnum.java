package cn.iocoder.yudao.service.enums.system.operate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 操作类型
*/
@Getter
@AllArgsConstructor
public enum SystemOperateTypeEnum implements IntArrayValuable {

    /**
    * 其它
    */
    OTHER(0, "其它"),
    /**
    * 查询
    */
    QUERY(1, "查询"),
    /**
    * 新增
    */
    INSERT(2, "新增"),
    /**
    * 修改
    */
    MODIFY(3, "修改"),
    /**
    * 删除
    */
    DELETE(4, "删除"),
    /**
    * 导出
    */
    EXPORT(5, "导出"),
    /**
    * 导入
    */
    IMPORT(6, "导入");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemOperateTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemOperateTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
