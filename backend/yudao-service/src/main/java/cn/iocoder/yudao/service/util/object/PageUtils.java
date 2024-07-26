package cn.iocoder.yudao.service.util.object;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageParam;

/**
 * {@link cn.iocoder.yudao.service.framework.web.web.core.pojo.PageParam} 工具类
 *
 * @author 芋道源码
 */
public class PageUtils {

    public static int getStart(PageParam pageParam) {
        return (pageParam.getPageNo() - 1) * pageParam.getPageSize();
    }

}
