package com.ivan.springboot.configuration;


import org.apache.cxf.bus.spring.SpringBus;
import org.apache.cxf.jaxws.EndpointImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.ivan.springboot.ws.MainWS;

import javax.xml.ws.Endpoint;
 
@Configuration
public class WebServiceConfiguration {
	
    @Autowired
    private SpringBus bus;
    
    @Autowired
    private MainWS mainWS;
 
    @Bean
    public Endpoint endpoint() {
        EndpointImpl endpoint = new EndpointImpl(bus, mainWS);
        endpoint.publish("/mainWS");
        return endpoint;
    }
}
