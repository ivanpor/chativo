package com.ivan.chativo.services.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import com.ivan.chativo.services.MainService;

@Profile("pre")
@Service
public class MainServicePreImpl implements MainService {
	
	@Value("${name}")
	private String name;

	public String findName() {
		return name;
	}

}
