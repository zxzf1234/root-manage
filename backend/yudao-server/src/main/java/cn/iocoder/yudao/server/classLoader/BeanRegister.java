package cn.iocoder.yudao.server.classLoader;

import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.GenericBeanDefinition;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

import java.net.URLClassLoader;
import java.util.Set;

public class BeanRegister {
    private final ApplicationContext applicationContext;

    public BeanRegister(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    public void registerBeans(Set<Class<?>> classes, URLClassLoader loader) {
        ConfigurableListableBeanFactory beanFactory = ((ConfigurableApplicationContext) applicationContext).getBeanFactory();
        BeanDefinitionRegistry registry = (BeanDefinitionRegistry) beanFactory;

        for (Class<?> clazz : classes) {
            GenericBeanDefinition beanDefinition = new GenericBeanDefinition();
            beanDefinition.setBeanClass(clazz);
            beanDefinition.setScope("prototype"); // 确保每次请求都创建新的实例
            beanDefinition.setAttribute("classLoader", loader); // 设置类加载器属性

            String uniqueBeanName = getUniqueBeanName(clazz, loader);
            registry.registerBeanDefinition(uniqueBeanName, beanDefinition);
        }
    }

    private String getUniqueBeanName(Class<?> clazz, URLClassLoader loader) {
        return clazz.getName() + "@" + System.identityHashCode(loader);
    }
}
