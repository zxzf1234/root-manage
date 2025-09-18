package com.xiyu.service.util.object;

import com.xiyu.service.framework.web.web.core.pojo.PageParam;

/**
 * {@link com.xiyu.service.framework.web.web.core.pojo.PageParam} 工具类
 *
 * @author 芋道源码
 */
public class PageUtils {

    public static int getStart(PageParam pageParam) {
        return (pageParam.getPageNo() - 1) * pageParam.getPageSize();
    }

}
