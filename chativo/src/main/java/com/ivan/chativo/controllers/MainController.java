package com.ivan.chativo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.apache.camel.ProducerTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ivan.chativo.services.MainService;
import com.ivan.chativo.ws.MainWS;

@RestController
public class MainController {
	
	@Autowired
	private MainService mainService;
	
	@Autowired
	private ProducerTemplate producerTemplate;
	
	@Autowired
	private MainWS mainWS;
	
	@Autowired
    private SessionRegistry sessionRegistry;

	@RequestMapping("/currentuser")
	public String currentUser(Authentication auth) {
        return auth.getName();
    }
	
	@RequestMapping("/users")
	public List<Object> listLoggedUsers(Authentication auth) {
		List<Object> listUsers = new ArrayList<Object>();
		for(Object o : sessionRegistry.getAllPrincipals()) {
			User user = (User)o;
			if(!user.getUsername().equals(auth.getName())){
				listUsers.add(o);
			}
		}
        return listUsers;
    }
	
	@RequestMapping("/execute")
	public String execute(){
		return this.mainService.findName().concat(this.mainWS.findFromWebService());
	}
	
	@RequestMapping("/send")
	public void send(){
		
		StringBuilder result = new StringBuilder();
		result.append("<?xml version='1.0' encoding='UTF-8'?>");
		result.append("<sale>");
		result.append("<result>OK</result>");
		result.append("<user>ivan</user>");
		result.append("<transaction>test</transaction>");
		result.append("</sale>");
		
		producerTemplate.sendBody("direct:mainQueue", result.toString());
	}
}
