package cn.iocoder.yudao.server.classLoader;

import java.net.URLClassLoader;
import java.util.Set;
import org.reflections.Reflections;
import org.reflections.scanners.TypeElementsScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;
import org.springframework.stereotype.Component;

public class ComponentScanner {
    public Set<Class<?>> scanComponents(URLClassLoader loader, String packageName) {
        Reflections reflections = new Reflections(new ConfigurationBuilder()
                .setUrls(ClasspathHelper.forClassLoader(loader))
                .setScanners(new TypeElementsScanner())
                .filterInputsBy(new FilterBuilder().includePackage(packageName)));

        return reflections.getTypesAnnotatedWith(Component.class);
    }
}
