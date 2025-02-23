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
    DATABASE(1, "数据库"),
    /**
    * 本地磁盘
    */
    LOCAL(10, "本地磁盘"),
    /**
    * FTP 服务器
    */
    FTP(11, "FTP 服务器"),
    /**
    * SFTP 服务器
    */
    SFTP(12, "SFTP 服务器"),
    /**
    * S3 对象存储
    */
    OBJECT(20, "S3 对象存储");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraFileStorageEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraFileStorageEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
