package cn.iocoder.yudao.server.aop;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.io.IOException;

@Component
public class serverAspect implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String uri = ((HttpServletRequest) request).getRequestURI();
        System.out.println("uri is " + uri);
        // 解析URL中的版本号
//        String pathInfo = httpRequest.getPathInfo();
//        System.out.println("pathInfo is " + pathInfo);
        chain.doFilter(request, response);
    }
}
