package com.ivan.chativo.objects;

import java.io.Serializable;

public class Result implements Serializable{

	private static final long serialVersionUID = -5105435786129594950L;
	
	private String user;
    private String content;
    
	public Result(String user, String content) {
		super();
		this.user = user;
		this.content = content;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}

  
}
