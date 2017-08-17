package com.ivan.springboot.ws;

import javax.jws.WebMethod;
import javax.jws.WebResult;
import javax.jws.WebService;

@WebService(serviceName="mainWS")
public interface MainWS {
	
	@WebResult(name="result")
	@WebMethod(operationName="findFromWebService")
	public String findFromWebService();

}
