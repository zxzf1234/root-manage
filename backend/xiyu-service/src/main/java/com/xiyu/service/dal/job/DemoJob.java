package com.xiyu.service.dal.job;

import com.xiyu.service.framework.job.core.handler.JobHandler;
import com.xiyu.service.model.system.user.SystemUser;
import com.xiyu.service.repository.system.user.SystemUserRepository;
import org.springframework.stereotype.Component;

import jakarta.annotation.Resource;
import java.util.List;

@Component
public class DemoJob implements JobHandler {

    @Resource
    private SystemUserRepository systemUserRepository;

    @Override
    public String execute(String param) throws Exception {
        List<SystemUser> users = systemUserRepository.findAll();
        return "用户数量：" + users.size();
    }

}
