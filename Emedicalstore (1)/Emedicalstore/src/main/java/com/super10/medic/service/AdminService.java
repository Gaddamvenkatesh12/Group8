package com.super10.medic.service;

import java.util.List;

import com.super10.medic.model.AdminLogin;
import com.super10.medic.model.UserAuthenticationStatus;

public interface AdminService
{
	AdminLogin getAdminById(int id);
	List<AdminLogin> getAdminDetails();
	void insertAdminLogin (AdminLogin Al);
	UserAuthenticationStatus getStatus(String name , String password);
}
