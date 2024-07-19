package cn.iocoder.yudao.service.service.infra.data;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;
import java.util.*;
import javax.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import cn.iocoder.yudao.framework.common.util.entity.EntityUtils;
import org.babyfish.jimmer.DraftObjects;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.convert.infra.data.ConfigConvert;
import cn.iocoder.yudao.service.vo.infra.data.config.*;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.infra.data.ConfigErrorCode.*;

/**
 * 配置管理 Service 实现类
 */
@Service
@Validated
public class ConfigServiceImpl implements ConfigService {



}
