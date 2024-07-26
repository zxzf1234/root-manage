package cn.iocoder.yudao.service.enums.infra.file;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 文件存储器
*/
@Getter
@AllArgsConstructor
public enum InfraFileStorageEnum implements IntArrayValuable {

    /**
    * 数据库
    */
    DATABASE(1),
    /**
    * 本地磁盘
    */
    LOCAL(10),
    /**
    * FTP 服务器
    */
    FTP(11),
    /**
    * SFTP 服务器
    */
    SFTP(12),
    /**
    * S3 对象存储
    */
    OBJECT(20);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(InfraFileStorageEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}
}
