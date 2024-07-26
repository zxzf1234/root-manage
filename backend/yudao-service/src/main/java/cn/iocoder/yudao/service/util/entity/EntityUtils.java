package cn.iocoder.yudao.service.util.entity;

import org.babyfish.jimmer.ImmutableObjects;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;

import java.util.Collection;
import java.util.Objects;

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
}
