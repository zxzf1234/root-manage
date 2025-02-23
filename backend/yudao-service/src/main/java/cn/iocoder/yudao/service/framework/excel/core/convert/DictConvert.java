package cn.iocoder.yudao.service.framework.excel.core.convert;

import cn.hutool.core.convert.Convert;
import cn.iocoder.yudao.service.enums.common.CommonSexEnum;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;
import cn.iocoder.yudao.service.framework.excel.core.annotations.DictFormat;
import cn.iocoder.yudao.service.service.infra.data.DictTypeService;
import com.alibaba.excel.converters.Converter;
import com.alibaba.excel.enums.CellDataTypeEnum;
import com.alibaba.excel.metadata.GlobalConfiguration;
import com.alibaba.excel.metadata.data.ReadCellData;
import com.alibaba.excel.metadata.data.WriteCellData;
import com.alibaba.excel.metadata.property.ExcelContentProperty;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.stream.IntStream;

/**
 * Excel 数据字典转换器
 *
 * @author 芋道源码
 */
@Slf4j
public class DictConvert implements Converter<Object> {

    @Resource
    private DictTypeService dictTypeService;

    @Override
    public Class<?> supportJavaTypeKey() {
        throw new UnsupportedOperationException("暂不支持，也不需要");
    }

    @Override
    public CellDataTypeEnum supportExcelTypeKey() {
        throw new UnsupportedOperationException("暂不支持，也不需要");
    }

    @Override
    public Object convertToJavaData(ReadCellData readCellData, ExcelContentProperty contentProperty,
                                    GlobalConfiguration globalConfiguration) throws NoSuchFieldException, IllegalAccessException {
        // 使用字典解析
        String label = readCellData.getStringValue();

        Class<? extends IntArrayValuable> type = getType(contentProperty);

        // 获取静态 VALUES 数组
        Field valuesField = type.getDeclaredField("VALUES");
        int[] valuesArray = (int[]) valuesField.get(null);

        // 获取静态 VALUES 数组
        Field labelsField = type.getDeclaredField("LABELS");
        String[] labelsArray = (String[]) labelsField.get(null);

        int index = Arrays.stream(labelsArray).toList().indexOf(label);

        if(index >= 0){
            Class<?> fieldClazz = contentProperty.getField().getType();
            return Convert.convert(fieldClazz, valuesArray[index]);
        } else {
            log.error("[convertToJavaData][type({}) 解析不掉 label({})]", type.getName(), label);
            return null;
        }

    }

    @Override
    public WriteCellData<String> convertToExcelData(Object object, ExcelContentProperty contentProperty,
                                                    GlobalConfiguration globalConfiguration) throws NoSuchFieldException, IllegalAccessException {
        // 空时，返回空
        if (object == null) {
            return new WriteCellData<>("");
        }

        // 使用字典格式化
        String value = String.valueOf(object);

        Class<? extends IntArrayValuable> type = getType(contentProperty);

        // 获取静态 VALUES 数组
        Field valuesField = type.getDeclaredField("VALUES");
        int[] valuesArray = (int[]) valuesField.get(null);

        // 获取静态 VALUES 数组
        Field labelsField = type.getDeclaredField("LABELS");
        String[] labelsArray = (String[]) labelsField.get(null);

        int index =  IntStream.range(0, valuesArray.length)
                .filter(i -> valuesArray[i] == 1)
                .findFirst().orElse(-1);
        if (index >= 0) {
            // 生成 Excel 小表格
            return new WriteCellData<>(labelsArray[index]);
        }else{
            log.error("[convertToExcelData][type({}) 转换不了 label({})]", type.getName(), value);
            return new WriteCellData<>("");
        }

    }

    private static Class<? extends IntArrayValuable> getType(ExcelContentProperty contentProperty) {
        return contentProperty.getField().getAnnotation(DictFormat.class).value();
    }

}
