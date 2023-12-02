package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoGetOutput;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;
import java.util.*;
import javax.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.convert.infra.data.DictNoConvert;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.*;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.enums.infra.ErrorCodeConstants.*;

/**
 * 字典编号 Service 实现类
 */
@Service
@Validated
public class DictNoServiceImpl implements DictNoService {



    @Override
    public DictNoGetOutput get(String id) {
        return null;
    }

}
