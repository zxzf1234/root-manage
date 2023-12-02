package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoGetOutput;
import java.util.*;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.*;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import javax.servlet.http.HttpServletResponse;

/**
 * 字典编号 Service 接口
 */
public interface DictNoService {

    DictNoGetOutput get(String id);

}
