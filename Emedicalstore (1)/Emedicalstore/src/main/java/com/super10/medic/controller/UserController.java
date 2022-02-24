package com.super10.medic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.super10.medic.model.AdminLogin;
import com.super10.medic.model.UserAuthenticationStatus;
import com.super10.medic.model.UserLogin;
import com.super10.medic.repository.UserRepository;
import com.super10.medic.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController 
{
	
	
	@Autowired
	private UserService userService;
	
	
	@SuppressWarnings("rawtypes")
	@PostMapping("/user")
	public ResponseEntity insert(@RequestBody UserLogin ul)
	{
		userService.insertUserLogin(ul);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
		
	@GetMapping("/users")
	public ResponseEntity<List<UserLogin>> getUserLogin() 
	{
		List<UserLogin> ul = userService.getUserLogin();
		return new ResponseEntity<List<UserLogin>>(ul, HttpStatus.OK);
	}
	@GetMapping("/users/{userId}")
	public ResponseEntity<UserLogin> getuserById(@PathVariable("userId") int userId) {
		UserLogin ul = userService.getuserById(userId);
		return ResponseEntity.ok(ul);
	}
	@PostMapping("/userlogin")
	public ResponseEntity<UserAuthenticationStatus> authentacated(@RequestBody UserLogin user)
	{
		System.out.println(user.getUserName() +"\t" +user.getPassword());
		UserAuthenticationStatus status = userService.getStatus(user.getUserName() , user.getPassword());
		return  new ResponseEntity<UserAuthenticationStatus>(status , HttpStatus.ACCEPTED);
		
	}
	
	
	
}
