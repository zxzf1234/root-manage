package cn.iocoder.yudao.server.classLoader;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.GenericBeanDefinition;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.io.support.SpringFactoriesLoader;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.stereotype.Component;

import java.net.URLClassLoader;
import java.util.List;
import java.util.Set;

public class BeanRegister {
    private final AnnotationConfigApplicationContext applicationContext;

    public BeanRegister(AnnotationConfigApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    public void registerBeans(Set<Class<?>> classes, JarClassLoader loader) {
        ConfigurableListableBeanFactory beanFactory = ((ConfigurableApplicationContext) applicationContext).getBeanFactory();
        BeanDefinitionRegistry registry = (BeanDefinitionRegistry) beanFactory;

        for (Class<?> clazz : classes) {
            GenericBeanDefinition beanDefinition = new GenericBeanDefinition();
            beanDefinition.setBeanClass(clazz);
//            beanDefinition.setScope("prototype"); // 确保每次请求都创建新的实例
            beanDefinition.setAttribute("classLoader", loader); // 设置类加载器属性
            if (clazz.isAnnotationPresent(Component.class)) {
                registry.registerBeanDefinition(clazz.getName(), beanDefinition);
            }
        }



        List<String> autoConfigurationClasses = SpringFactoriesLoader.loadFactoryNames(EnableAutoConfiguration.class, JarLoaderInitializer.class.getClassLoader());
        for (String className : autoConfigurationClasses) {
            try {

                // 使用反射加载类
                Class<?> clazz = Class.forName(className);

                if(className.contains("JimmerSpringGraphQLAutoConfiguration")){
                    System.out.println("not Registering AutoConfiguration class: " + clazz.getName());
                    continue;
                }

                // 将自动配置类注册到 ApplicationContext 中
                applicationContext.register(clazz);
                System.out.println("Registering AutoConfiguration class: " + clazz.getName());
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
        System.out.println("this is autoConfigurationClasses");
        System.out.println(autoConfigurationClasses);
    }

//    private String getUniqueBeanName(Class<?> clazz, JarClassLoader loader) {
//        return clazz.getName() + "@" + System.identityHashCode(loader);
//    }
}
