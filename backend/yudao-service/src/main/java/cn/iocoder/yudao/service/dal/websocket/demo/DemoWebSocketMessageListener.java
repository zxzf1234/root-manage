package cn.iocoder.yudao.service.dal.websocket.demo;

import cn.hutool.core.thread.ThreadUtil;
import cn.iocoder.yudao.service.dal.websocket.demo.message.DemoReceiveMessage;
import cn.iocoder.yudao.service.dal.websocket.demo.message.DemoSendMessage;
import cn.iocoder.yudao.service.enums.common.UserTypeEnum;
import cn.iocoder.yudao.service.framework.websocket.core.listener.WebSocketMessageListener;
import cn.iocoder.yudao.service.framework.websocket.core.sender.WebSocketMessageSender;
import cn.iocoder.yudao.service.framework.websocket.core.util.WebSocketFrameworkUtils;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.util.concurrent.TimeUnit;

/**
 * WebSocket 示例：单发消息
 *
 * @author 芋道源码
 */
@Component
public class DemoWebSocketMessageListener implements WebSocketMessageListener<DemoSendMessage> {

    @Resource
    private WebSocketMessageSender webSocketMessageSender;

    @Override
    public void onMessage(WebSocketSession session, DemoSendMessage message) {
        Long fromUserId = WebSocketFrameworkUtils.getLoginUserId(session);
        // 情况一：单发
        if (message.getToUserId() != null) {
            DemoReceiveMessage toMessage = new DemoReceiveMessage().setFromUserId(fromUserId)
                    .setText(message.getText()).setSingle(true);
            webSocketMessageSender.sendObject(UserTypeEnum.ADMIN.getValue(), message.getToUserId(), // 给指定用户
                    "demo-message-receive", toMessage);
            return;
        }
        // 情况二：群发
        DemoReceiveMessage toMessage = new DemoReceiveMessage().setFromUserId(fromUserId)
                .setText(message.getText()).setSingle(false);
        webSocketMessageSender.sendObject(UserTypeEnum.ADMIN.getValue(), // 给所有用户
                "demo-message-receive", toMessage);
        ThreadUtil.sleep(1, TimeUnit.SECONDS);
        DemoReceiveMessage toMessage1 = new DemoReceiveMessage().setFromUserId(fromUserId)
                .setText(message.getText()).setSingle(true);
        webSocketMessageSender.sendObject(UserTypeEnum.ADMIN.getValue(), message.getToUserId(), // 给指定用户
                "demo-message-receive", toMessage1);
    }

    @Override
    public String getType() {
        return "demo-message-send";
    }

}
