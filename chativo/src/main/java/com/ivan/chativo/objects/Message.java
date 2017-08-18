package com.ivan.chativo.objects;

import java.io.Serializable;

public class Message implements Serializable {

	private static final long serialVersionUID = 6764045698809390233L;
	
	private String user;
    private String message;
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
