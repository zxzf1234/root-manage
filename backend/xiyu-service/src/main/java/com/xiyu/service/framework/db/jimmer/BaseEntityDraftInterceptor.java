package com.xiyu.service.framework.db.jimmer;

import com.xiyu.service.framework.security.core.util.SecurityFrameworkUtils;
import com.xiyu.service.model.base.BaseEntity;
import com.xiyu.service.model.base.BaseEntityDraft;
import com.xiyu.service.model.base.BaseEntityProps;
import com.xiyu.service.model.system.user.SystemUserDraft;
import org.babyfish.jimmer.ImmutableObjects;
import org.babyfish.jimmer.sql.DraftInterceptor;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.context.annotation.Configuration;

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
