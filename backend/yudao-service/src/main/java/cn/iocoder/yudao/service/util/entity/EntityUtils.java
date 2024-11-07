package cn.iocoder.yudao.service.util.entity;

import kotlin.reflect.jvm.internal.impl.descriptors.Visibilities;
import org.babyfish.jimmer.ImmutableObjects;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;

import java.util.Collection;
import java.util.Objects;

import static cn.hutool.core.text.CharSequenceUtil.toSymbolCase;

public class EntityUtils {
    public static boolean isEquals(Object oldObject, Object newObject){
        Collection<ImmutableProp> oldProps = ImmutableType.get(oldObject.getClass()).getProps().values();
        Collection<ImmutableProp> newProps = ImmutableType.get(newObject.getClass()).getProps().values();
        if(oldProps.size() != newProps.size())
            return false;
        boolean isEquals = true;
        for(ImmutableProp oldProp : oldProps){
            if(oldProp.getTargetType()  == null
                    && !oldProp.getName().equals("createTime")
                    && !oldProp.getName().equals("updateTime")
                    && !oldProp.getName().equals("creatorId")
                    && !oldProp.getName().equals("updaterId")
                    && !oldProp.getName().equals("deletedTime")){
                Object oldColumnObject = ImmutableObjects.get(oldObject, oldProp);
                Object newColumnObject = ImmutableObjects.get(newObject, oldProp);
                if(Objects.isNull(oldColumnObject)){
                    if(!Objects.isNull(newColumnObject))
                        isEquals = false;
                    continue;
                }
                if(!oldColumnObject.equals(newColumnObject))
                    isEquals = false;
            }
        }

        return isEquals;
    }

    public static String getExecSql(Object tableEntity, String execType){
        String sql = "";
        ImmutableType immutableType = ImmutableType.get(tableEntity.getClass());
        String className = immutableType.getJavaClass().getName();
        String tableName = "";
        if(className.lastIndexOf(".") > 0){
            tableName = toSymbolCase(className.substring(className.lastIndexOf(".") + 1), '_');
        }else{
            return "";
        }
        Collection<ImmutableProp> props = immutableType.getProps().values();
        if(Objects.equals(execType, "insert")){
            sql = "INSERT IGNORE INTO " + tableName;
            StringBuilder columnNames = new StringBuilder();
            StringBuilder columnValues = new StringBuilder();
            for(ImmutableProp prop : props){
                String propName = toSymbolCase(prop.getName(), '_');
                if(!ImmutableObjects.isLoaded(tableEntity, prop))
                    continue;
                Object columnObject = ImmutableObjects.get(tableEntity, prop);
                String columnValue = calcColumnValue(propName, columnObject);
                if(!columnValue.isEmpty()){
                    if(!columnNames.toString().isEmpty()){
                        columnNames.append(",");
                    }
                    if(!columnValues.toString().isEmpty()){
                        columnValues.append(",");
                    }
                    columnValues.append(columnValue);
                    columnNames.append(propName);
                }
            }
            sql = sql + "(" + columnNames + ") VALUES (" + columnValues + ");\r\n";
            System.out.println(sql);
        }else{
            StringBuilder updateSql = new StringBuilder("UPDATE " + tableName + " SET ") ;
            String whereSql = "";
            for(ImmutableProp prop : props){
                String propName = toSymbolCase(prop.getName(), '_');
                if(propName.equals("create_time")){
                    continue;
                }
                if(!ImmutableObjects.isLoaded(tableEntity, prop))
                    continue;
                Object columnObject = ImmutableObjects.get(tableEntity, prop);
                String columnValue = calcColumnValue(propName, columnObject);
                if(!columnValue.isEmpty())
                    if(propName.equals("id")){
                        whereSql = " WHERE id = " + columnValue;
                    }else{
                        if(!updateSql.toString().equals("UPDATE " + tableName + " SET ")){
                            updateSql.append(",");
                        }
                        updateSql.append(propName).append("=").append(columnValue);
                    }
            }
            sql = updateSql + whereSql + ";\r\n";
            System.out.println(sql);
        }
        return sql;
    }

    private static String calcColumnValue(String propName,Object columnObject){
        if(propName.equals("update_time") || propName.equals("create_time")) {
            return "NOW()";
        } else if(Objects.isNull(columnObject)){
            return "NULL";
        }else if(columnObject.getClass().getName().contains("String")
                || columnObject.getClass().getName().contains("LocalDateTime")
                || columnObject.getClass().getName().contains("UUID")){
            return "'" + columnObject + "'";
        }else if(columnObject.getClass().getName().contains("Integer")
                ||columnObject.getClass().getName().contains("Long")
                ||columnObject.getClass().getName().contains("BigDecimal")
                ||columnObject.getClass().getName().contains("Boolean")){
            return columnObject.toString();
        }else
            return "";
    }
}
