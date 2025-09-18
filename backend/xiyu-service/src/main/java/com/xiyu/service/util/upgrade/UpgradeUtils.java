package com.xiyu.service.util.upgrade;

import cn.hutool.core.date.DateUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.RuntimeUtil;

import java.io.File;
import java.time.LocalDateTime;

public class UpgradeUtils {


    public static boolean upgradeSql(String sql, Integer version, Integer useId){
        String curDate = DateUtil.format(LocalDateTime.now(), "yyyyMMdd");
        String curMouth = DateUtil.format(LocalDateTime.now(), "yyyyMM");
        String curDay = DateUtil.format(LocalDateTime.now(), "dd");

        if (version == null || useId == null)
            return false;
        String path = FileUtil.getAbsolutePath("db/migration").replace("target/classes", "src/main/resources") + "/" + curMouth + "/" + curDay;

        String newFileName = path + "/" + "V"+ curDate + "_" + useId + "_" + String.format("%3d", version + 1).replace(" ", "0") + ".sql";
        File newFile = FileUtil.touch(newFileName);
        FileUtil.appendUtf8String(sql, newFile);
        RuntimeUtil.execForStr("git add " + newFileName);
        return true;
    }
}
