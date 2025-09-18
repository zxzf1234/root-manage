package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.QrtzJobDetails;
import com.xiyu.service.model.infra.data.QrtzJobDetailsTable;
import com.xiyu.service.model.infra.data.QrtzTriggersTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface QrtzJobDetailsRepository extends JRepository<QrtzJobDetails, String> {
    QrtzJobDetailsTable qrtzJobDetailsTable = QrtzJobDetailsTable.$;
}
