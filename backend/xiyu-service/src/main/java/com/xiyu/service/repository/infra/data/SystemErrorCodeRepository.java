package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.SystemErrorCode;
import com.xiyu.service.model.infra.data.SystemErrorCodeTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface SystemErrorCodeRepository extends JRepository<SystemErrorCode, Long> {
    SystemErrorCodeTable systemErrorCodeTable = SystemErrorCodeTable.$;

}
