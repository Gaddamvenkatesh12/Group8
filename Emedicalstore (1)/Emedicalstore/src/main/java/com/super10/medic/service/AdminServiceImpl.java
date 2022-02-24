package com.super10.medic.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.stereotype.Service;

import com.super10.medic.model.AdminLogin;
import com.super10.medic.model.UserAuthenticationStatus;
import com.super10.medic.model.UserLogin;
import com.super10.medic.repository.AdminRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService
{
	@Autowired
	private AdminRepository adminrepository;
	

	@Override
	public AdminLogin getAdminById(int id) {
		AdminLogin adminlogin = adminrepository.findById(id).orElse(null);
		return adminlogin;
	}

	@Override
	public List<AdminLogin> getAdminDetails() {
		return adminrepository.findAll();
	}

	@Override
	public void insertAdminLogin(AdminLogin Al)
	{
		adminrepository.save(Al);
		
	}

	@Override
	public UserAuthenticationStatus getStatus(String name, String password) 
	{
		UserAuthenticationStatus status ;
		AdminLogin adminlogin =adminrepository.findByNameAndPassword(name, password);
		if(adminlogin!=null)
		{
			status = new UserAuthenticationStatus(adminlogin.getName() , adminlogin.getPassword(),true);
		}
		else
		{
			status = new UserAuthenticationStatus(null,null,false);
		}
		return status;
	}

}

