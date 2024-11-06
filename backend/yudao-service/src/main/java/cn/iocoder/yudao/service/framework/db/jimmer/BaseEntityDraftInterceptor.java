package cn.iocoder.yudao.service.framework.db.jimmer;

import cn.iocoder.yudao.service.framework.security.core.util.SecurityFrameworkUtils;
import cn.iocoder.yudao.service.model.base.BaseEntity;
import cn.iocoder.yudao.service.model.base.BaseEntityDraft;
import cn.iocoder.yudao.service.model.base.BaseEntityProps;
import cn.iocoder.yudao.service.model.system.user.SystemUserDraft;
import org.babyfish.jimmer.Draft;
import org.babyfish.jimmer.ImmutableObjects;
import org.babyfish.jimmer.meta.TypedProp;
import org.babyfish.jimmer.sql.DraftInterceptor;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.context.annotation.Configuration;

import java.util.Collection;

@Configuration
public class BaseEntityDraftInterceptor implements DraftInterceptor<BaseEntity, BaseEntityDraft> {
    @Override
    public void beforeSave(@NotNull BaseEntityDraft draft,@Nullable BaseEntity entry) {

        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.UPDATER)) {
            draft.setUpdater(SystemUserDraft.$.produce(editor -> {
                if (SecurityFrameworkUtils.getLoginUserId() == null)
                    editor.setId(0);
                else
                    editor.setId(SecurityFrameworkUtils.getLoginUserId());
            }));
        }
        if (entry == null) {

            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {
                draft.setCreator(SystemUserDraft.$.produce(creator -> {
                    if (SecurityFrameworkUtils.getLoginUserId() == null)
                        creator.setId(0);
                    else
                        creator.setId(SecurityFrameworkUtils.getLoginUserId());
                }));
            }
        }
    }
}
