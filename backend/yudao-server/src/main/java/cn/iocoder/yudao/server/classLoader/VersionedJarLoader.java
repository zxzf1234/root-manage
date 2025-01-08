package cn.iocoder.yudao.server.classLoader;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class VersionedJarLoader {
    private final Map<String, URLClassLoader> loaders = new HashMap<>();

    public void loadJars(String jarDirectory) throws Exception {
        // 假设你有一个方法 listJars() 返回所有 JAR 文件的路径列表
        for (String jarPath : listJars(jarDirectory)) {
            String version = extractVersionFromJarPath(jarPath);
            URL[] urls = {new File(jarPath).toURI().toURL()};
            URLClassLoader loader = new URLClassLoader(urls, getClass().getClassLoader());
            loaders.put(version, loader);
        }
    }

    private Set<String> listJars(String directory) {
        Set<String> jarPaths = new HashSet<>();
        Path dir = Paths.get(directory);

        if (Files.isDirectory(dir)) {
            try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir, "*.jar")) {
                for (Path entry : stream) {
                    jarPaths.add(entry.toAbsolutePath().toString());
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            throw new IllegalArgumentException("Provided path is not a directory: " + directory);
        }

        return jarPaths;
    }

    private String extractVersionFromJarPath(String jarPath) {
        // 定义一个正则表达式来匹配 JAR 文件名中的版本号
        Pattern pattern = Pattern.compile("yudao-service-(\\d+\\.\\d+\\.\\d+-snapshot).jar");
        Matcher matcher = pattern.matcher(new File(jarPath).getName());

        if (matcher.find()) {
            return matcher.group(1); // 返回第一个捕获组，即版本号
        } else {
            throw new IllegalArgumentException("Cannot extract version from JAR file name: " + jarPath);
        }
    }

    public URLClassLoader getLoader(String version) {
        return loaders.get(version);
    }

    public Map<String, URLClassLoader> getLoaders(){
        return loaders;
    }
}
