package cn.iocoder.yudao.server.aop;

import cn.iocoder.yudao.server.classLoader.VersionedJarLoader;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.io.IOException;
import java.net.URLClassLoader;

@Component
public class serverAspect implements Filter {

//    private final VersionedJarLoader jarLoader;
//    private final ApplicationContext applicationContext;
//
//    public serverAspect(VersionedJarLoader jarLoader, ApplicationContext applicationContext) {
//        this.jarLoader = jarLoader;
//        this.applicationContext = applicationContext;
//    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uri = ((HttpServletRequest) request).getRequestURI();
        System.out.println("uri is " + uri);
//        String version = "1.7.2";
//        URLClassLoader loader = jarLoader.getLoader(version);
//
//        if (loader == null) {
//            throw new IllegalArgumentException("No loader found for version: " + version);
//        }
//
//        String uniqueBeanName = getUniqueBeanName(beanName, loader);
//
//        try {
//            Object beanInstance = applicationContext.getBean(uniqueBeanName);
//            Method method = beanInstance.getClass().getMethod(methodName);
//            return method.invoke(beanInstance);
//        } catch (NoSuchBeanDefinitionException e) {
//            throw new IllegalArgumentException("No bean found with name: " + uniqueBeanName);
//        }
        chain.doFilter(request, response);
    }

    private String getUniqueBeanName(String beanName, URLClassLoader loader) {
        return beanName + "@" + System.identityHashCode(loader);
    }
}
