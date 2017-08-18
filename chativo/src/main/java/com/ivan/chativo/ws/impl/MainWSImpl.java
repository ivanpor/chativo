package com.ivan.chativo.ws.impl;

import org.springframework.stereotype.Service;

import com.ivan.chativo.ws.MainWS;

@Service
public class MainWSImpl implements MainWS{

	@Override
	public String findFromWebService() {
		return " y desde el WebService";
	}

}
