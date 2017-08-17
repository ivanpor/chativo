package com.ivan.springboot.ws.impl;

import org.springframework.stereotype.Service;

import com.ivan.springboot.ws.MainWS;

@Service
public class MainWSImpl implements MainWS{

	@Override
	public String findFromWebService() {
		return " y desde el WebService";
	}

}
