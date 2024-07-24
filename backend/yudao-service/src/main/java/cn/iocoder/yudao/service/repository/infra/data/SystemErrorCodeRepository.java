package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.SystemErrorCode;
import cn.iocoder.yudao.service.model.infra.data.SystemErrorCodeTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.data.domain.Page;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface SystemErrorCodeRepository extends JRepository<SystemErrorCode, Long> {
    SystemErrorCodeTable systemErrorCodeTable = SystemErrorCodeTable.$;

}
