package com.ivan.springboot.controllers;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ivan.springboot.objects.Result;
import com.ivan.springboot.objects.Message;

@Controller
public class ChatController {
	
	@RequestMapping("/login")
	public String init(){
		return "index";
	}
	
	@RequestMapping("/access")
	public String chat(){
		return "charla";
	}
	
	@MessageMapping("/sendMessage")
    @SendTo("/topic/message")
    public Result sendMessage(Authentication auth, Message message) throws Exception {
        return new Result(auth.getName(),message.getMessage());
    }
	
	@MessageMapping("/sendMessage/{user}")
    @SendTo("/topic/{user}")
    public Result sendMessageUser(Authentication auth, @DestinationVariable String user, Message message) throws Exception {
        return new Result(auth.getName(),message.getMessage());
    }
}
