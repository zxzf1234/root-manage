package com.xiyu.server.classLoader;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

public class JarClassLoader extends ClassLoader {

    private final String jarFilePath;

    public JarClassLoader(String jarFilePath) {
        super(JarClassLoader.class.getClassLoader()); // 设定父类加载器
        this.jarFilePath = jarFilePath;
    }

    @Override
    protected Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
        // 先尝试自己加载类，打破双亲委派机制
        synchronized (getClassLoadingLock(name)) {
            // 1. 如果已经加载过这个类，直接返回
            Class<?> c = findLoadedClass(name);
            if (c != null) {
                return c;
            }

            try {
                // 2. 如果该类不是系统类，则加载
                // 跳过父类加载器，尝试自己加载
                c = findClass(name);
                if (resolve) {
                    resolveClass(c);
                }
                return c;
            } catch (ClassNotFoundException e) {
                // 如果找不到类，委托给父类加载器加载
                return super.loadClass(name, resolve);
            }
        }
    }

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        // 将类名转为路径，替换"."为"/"并加上".class"
        String classPath = name.replace('.', '/') + ".class";

        // 从 JAR 文件中读取字节流
        try (JarFile jarFile = new JarFile(jarFilePath)) {
            JarEntry entry = jarFile.getJarEntry(classPath);
            if (entry == null) {
                throw new ClassNotFoundException("Class " + name + " not found in JAR file.");
            }

            try (InputStream inputStream = jarFile.getInputStream(entry)) {
                byte[] classBytes = inputStream.readAllBytes();
                return defineClass(name, classBytes, 0, classBytes.length);
            }
        } catch (IOException e) {
            throw new ClassNotFoundException("Error reading class " + name, e);
        }

    }
}
