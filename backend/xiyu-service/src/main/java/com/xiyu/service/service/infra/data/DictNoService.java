package com.xiyu.service.service.infra.data;

import com.xiyu.service.vo.infra.data.dictNo.DictNoQueryOutput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoQueryInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoUpdateInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoCreateInput;
import com.xiyu.service.vo.infra.data.dictNo.DictNoGetOutput;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;

/**
 * 字典编号 Service 接口
 */
public interface DictNoService {

    DictNoGetOutput get(String id);

    String create(DictNoCreateInput inputVO);

    String update(DictNoUpdateInput inputVO);

    PageResult<DictNoQueryOutput> query(DictNoQueryInput inputVO);

    String produceNo(String keyName);

}
