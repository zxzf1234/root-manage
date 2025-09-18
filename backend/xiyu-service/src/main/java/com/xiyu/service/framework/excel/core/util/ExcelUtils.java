package com.xiyu.service.framework.excel.core.util;

import com.xiyu.service.enums.common.IntArrayValuable;
import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.annotation.ExcelProperty;
import com.alibaba.excel.write.style.column.LongestMatchColumnWidthStyleStrategy;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.List;

import static com.xiyu.service.errorCode.infra.ErrorCodeConstants.ERROR_CODE_IMPORT_DICT;
import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;

/**
 * Excel 工具类
 *
 * @author 芋道源码
 */
public class ExcelUtils {

    /**
     * 将列表以 Excel 响应给前端
     *
     * @param response 响应
     * @param filename 文件名
     * @param sheetName Excel sheet 名
     * @param head Excel head 头
     * @param data 数据列表哦
     * @param <T> 泛型，保证 head 和 data 类型的一致性
     * @throws IOException 写入失败的情况
     */
    public static <T> void write(HttpServletResponse response, String filename, String sheetName,
                                 Class<T> head, List<T> data) throws IOException {
        // 输出 Excel
        EasyExcel.write(response.getOutputStream(), head)
                .autoCloseStream(false) // 不要自动关闭，交给 Servlet 自己处理
                .registerWriteHandler(new LongestMatchColumnWidthStyleStrategy()) // 基于 column 长度，自动适配。最大 255 宽度
                .sheet(sheetName).doWrite(data);
        // 设置 header 和 contentType。写在最后的原因是，避免报错时，响应 contentType 已经被修改了
        response.addHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(filename, "UTF-8"));
        response.setContentType("application/vnd.ms-excel;charset=UTF-8");
    }

    public static <T> List<T> read(MultipartFile file, Class<T> head) throws IOException {
       return EasyExcel.read(file.getInputStream(), head, null)
                .autoCloseStream(false)  // 不要自动关闭，交给 Servlet 自己处理
                .doReadAllSync();
    }

    public static Integer convertToJavaData(Object excelVO, String fieldName, Class<? extends IntArrayValuable> enumType, Integer defaultType) throws Exception {
        // 获取对象的Class对象
        Class<?> clazz = excelVO.getClass();

        // 获取指定名称的字段
        Field field = clazz.getDeclaredField(fieldName);
        field.setAccessible(true); // 如果字段是私有的，需要设置为可访问

        // 检查该字段上是否存在ImportRequired注解
        String annotationValue = "";
        if (field.isAnnotationPresent(ExcelProperty.class)) {
            // 获取注解实例
            ExcelProperty annotation = field.getAnnotation(ExcelProperty.class);

            annotationValue = annotation.value()[0];
        }

        String getterMethodName = "get" + fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);
        // 查找并调用getter方法
        Method getterMethod = clazz.getMethod(getterMethodName);
        Object fieldValue = getterMethod.invoke(excelVO);
        if(fieldValue == null)
            return defaultType;

        String value = fieldValue.toString();
        if(!StringUtils.hasText(value))
            return defaultType;
        // 获取静态 VALUES 数组
        Field valuesField = enumType.getDeclaredField("VALUES");
        int[] valuesArray = (int[]) valuesField.get(null);

        // 获取静态 VALUES 数组
        Field labelsField = enumType.getDeclaredField("LABELS");
        String[] labelsArray = (String[]) labelsField.get(null);
        int index = Arrays.stream(labelsArray).toList().indexOf(value);
        if(index >= 0){
            return valuesArray[index];
        }else{
            throw exception(ERROR_CODE_IMPORT_DICT, annotationValue);
        }
    }

}
