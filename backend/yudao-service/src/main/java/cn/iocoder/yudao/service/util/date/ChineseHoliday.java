package cn.iocoder.yudao.service.util.date;

import org.apache.commons.collections4.Put;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

public class ChineseHoliday {
    static Map<Integer, String> holidayMap = new HashMap<>(Map.of(
            2025, "0101,0128,0129,0130,0131,0203,0204,0404,0501,0502,0505,0602,1001,1002,1003,1006,1007,1008"
    ));
    static Map<Integer, String> workdayMap = new HashMap<>(Map.of(
            2025, "0126,0208,0427,0928,1011"
    ));
    static LocalTime workStartTime = LocalTime.of(9, 0);
    static LocalTime workEndTime = LocalTime.of(17, 30);

    static LocalDate[] holidayOfYear(int year, Boolean isSkipSaturday, Boolean isSkipSunday) {
        var holiday = new ArrayList<LocalDate>();
        var firstDayOfYear = LocalDate.of(year, 1, 1);
        var daysOfYear = firstDayOfYear.plusYears(1).minusDays(1).getDayOfYear();
        for (var i = 1; i <= daysOfYear; i++) {
            var day = firstDayOfYear.withDayOfYear(i);
            if ((!isSkipSaturday && day.getDayOfWeek() == DayOfWeek.SATURDAY) || (!isSkipSunday && day.getDayOfWeek() == DayOfWeek.SUNDAY))
                holiday.add(day);
        }

        try {

            var specificHolidays = holidayMap.get(year);
            for (var i : specificHolidays.split(",")) {
                if (i.length() != 4) continue;
                var day = LocalDate.of(year, Integer.parseInt(i.substring(0, 2)), Integer.parseInt(i.substring(2, 4)));
                if (!holiday.contains(day)) holiday.add(day);
            }

            var specificWorkday = workdayMap.get(year);
            for (var i : specificWorkday.split(",")) {
                if (i.length() != 4) continue;
                var day = LocalDate.of(year, Integer.parseInt(i.substring(0, 2)), Integer.parseInt(i.substring(2, 4)));
                if (holiday.contains(day)) holiday.remove(day);
            }

        } catch (Exception ignored) {
        }
        Collections.sort(holiday);
        return holiday.toArray(LocalDate[]::new);
    }

    public static LocalDate[] getHoliday(int year, Boolean isSkipSaturday, Boolean isSkipSunday) {
        return holidayOfYear(year, isSkipSaturday, isSkipSunday);
    }

    public static LocalDate[] getHoliday(int year, int month) {
        return Arrays.stream(getHoliday(year, false, false))
                .filter(item -> item.getMonth().getValue() == month)
                .toArray(LocalDate[]::new);
    }

    public static Boolean isWorkingDay(LocalDate date) {
        return !Arrays.asList(getHoliday(date.getYear(), false, false)).contains(date);
    }

    public static Boolean isWorkingDay(LocalDate date, Boolean isSkipSaturday, Boolean isSkipSunday) {
        return !Arrays.asList(getHoliday(date.getYear(), isSkipSaturday, isSkipSunday)).contains(date);
    }

    public static Boolean isWorkingTime(LocalDateTime dateTime) {
        var date = dateTime.toLocalDate();
        var time = dateTime.toLocalTime();
        return isWorkingDay(date) && time.isAfter(workStartTime) && time.isBefore(workEndTime);
    }
}
