package com.xiyu.service.dal.redis.oauth2;

import cn.hutool.core.date.LocalDateTimeUtil;
import com.xiyu.service.util.collection.CollectionUtils;
import com.xiyu.service.util.json.JsonUtils;
import com.xiyu.service.model.infra.oauth2.SystemOauth2AccessToken;
import com.xiyu.service.model.infra.oauth2.SystemOauth2AccessTokenDraft;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

import jakarta.annotation.Resource;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static com.xiyu.service.dal.redis.RedisKeyConstants.OAUTH2_ACCESS_TOKEN;

/**
 * {@link SystemOauth2AccessToken} 的 RedisDAO
 *
 * @author 芋道源码
 */
@Repository
public class OAuth2AccessTokenRedisDAO {

    @Resource
    private StringRedisTemplate stringRedisTemplate;

    public SystemOauth2AccessToken get(String accessToken) {
        String redisKey = formatKey(accessToken);
        return JsonUtils.parseObject(stringRedisTemplate.opsForValue().get(redisKey), SystemOauth2AccessToken.class);
    }

    public void set(SystemOauth2AccessToken accessTokenDO) {
        String redisKey = formatKey(accessTokenDO.accessToken());
        // 清理多余字段，避免缓存

        accessTokenDO = SystemOauth2AccessTokenDraft.$.produce(accessTokenDO, SystemOauth2AccessToken->{
            SystemOauth2AccessToken.setUpdaterId(0L).setUpdateTime(LocalDateTime.now())
                    .setCreateTime(LocalDateTime.now());
        });
        long time = LocalDateTimeUtil.between(LocalDateTime.now(), accessTokenDO.expiresTime(), ChronoUnit.SECONDS);
        if(time == 0)
            return;
        stringRedisTemplate.opsForValue().set(redisKey, JsonUtils.toJsonString(accessTokenDO), time, TimeUnit.SECONDS);
    }

    public void delete(String accessToken) {
        String redisKey = formatKey(accessToken);
        stringRedisTemplate.delete(redisKey);
    }

    public void deleteList(Collection<String> accessTokens) {
        List<String> redisKeys = CollectionUtils.convertList(accessTokens, OAuth2AccessTokenRedisDAO::formatKey);
        stringRedisTemplate.delete(redisKeys);
    }

    private static String formatKey(String accessToken) {
        return String.format(OAUTH2_ACCESS_TOKEN.getKeyTemplate(), accessToken);
    }

}
