package com.lucasbbudelon.serverside;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;

@Controller
public class MessageController {

    @MessageMapping("/chat")
    @SendTo("/chatroom/messages")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public MessageModel MessageModel(MessageModel message) throws Exception {
        message.setDateTime(LocalDateTime.now());
        return message;
    }
}
