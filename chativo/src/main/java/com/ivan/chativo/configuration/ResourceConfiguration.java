package com.ivan.chativo.configuration;

import java.util.concurrent.TimeUnit;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.WebJarsResourceResolver;

@Configuration
public class ResourceConfiguration extends WebMvcConfigurerAdapter{

	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**")
        .addResourceLocations("/resources/", "/jsx/", "/webjars/")
        .setCacheControl(
                CacheControl.maxAge(30L, TimeUnit.DAYS).cachePublic())
        .resourceChain(true)
        .addResolver(new WebJarsResourceResolver());
    }

}
