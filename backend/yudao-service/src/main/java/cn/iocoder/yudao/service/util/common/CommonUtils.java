package cn.iocoder.yudao.service.util.common;

import org.apache.commons.lang3.tuple.Pair;

import java.util.ArrayList;
import java.util.List;

public class CommonUtils {

    public static List<Pair<Long, Long>> dragSort(Integer oldIndex, Integer newIndex, List<Pair<Long, Long>> sortList){
        int startIndex = oldIndex;
        int endIndex = newIndex;
        int step = (startIndex < endIndex) ? 1 : -1;
        Long lastSort = sortList.get(oldIndex).getValue();
        List<Pair<Long, Long>> newSortList = new ArrayList<>();
        for (int index = startIndex + step; index != endIndex + step; index += step) {
            Long tempSort = sortList.get(index).getValue();
            newSortList.add(Pair.of(sortList.get(index).getLeft(), lastSort));
            lastSort = tempSort;
        }
        newSortList.add(Pair.of(sortList.get(oldIndex).getLeft(), lastSort));
        return newSortList;
    }
}
