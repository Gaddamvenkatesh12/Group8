package com.super10.medic.service;

import java.util.List;

import com.super10.medic.model.UserAuthenticationStatus;
import com.super10.medic.model.UserLogin;

public interface UserService
{
	UserLogin getuserById(int userId);
	List<UserLogin> getUserLogin();
	void insertUserLogin(UserLogin ul);
	UserAuthenticationStatus getStatus(String userName , String password);
	

}

