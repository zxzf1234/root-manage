package cn.iocoder.yudao.service.framework.db.dataSource;

public class DatabaseContextHolder {
    private static final ThreadLocal<String> contextHolder = new ThreadLocal<>();

    public static void setDatabaseType(String databaseType) {
        contextHolder.set(databaseType);
    }

    public static String getDatabaseType() {
        return contextHolder.get();
    }

    public static void clear() {
        contextHolder.remove();
    }
}
