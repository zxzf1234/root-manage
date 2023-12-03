package cn.iocoder.yudao.service.model.infra.data;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
@Entity
public interface InfraDictNo extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @Key
    String keyName();

    String prefix();

    Integer dateForm();

    Integer dateBase();

    LocalDateTime lastDate();

    Integer postfixLen();

    Integer postfixVal();

    String remark();

}