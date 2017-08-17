package com.ivan.springboot;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.web.WebApplicationInitializer;

@PropertySource("classpath:app.properties")
@ComponentScan
@EnableAutoConfiguration
@Configuration
public class App implements WebApplicationInitializer {
	
	public static void main(String[] args) throws Exception {
		SpringApplication app = new SpringApplication(App.class);
        app.setWebEnvironment(true);
        app.run(args);
    }

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		servletContext.addListener(HttpSessionEventPublisher.class);
	}
}
