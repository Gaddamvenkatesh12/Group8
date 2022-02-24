package com.super10.medic.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.super10.medic.model.UserAuthenticationStatus;
import com.super10.medic.model.UserLogin;
import com.super10.medic.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService
{
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserLogin getuserById(int userId) {
		UserLogin userLogin = userRepository.findById(userId).orElse(null);
		return userLogin;
	}

	@Override
	public List<UserLogin> getUserLogin() {
		
		return userRepository.findAll();
	}

	@Override
	public void insertUserLogin(UserLogin userLogin)
	{
		userRepository.save(userLogin);
		
	}


	

	@Override
	public UserAuthenticationStatus getStatus(String userName, String password) 
	{
		UserAuthenticationStatus status ;
		UserLogin user = userRepository.findByUserNameAndPassword(userName, password);
		if(user!=null)
		{
			status = new UserAuthenticationStatus(user.getUserName(),user.getPassword(),true);
		}
		else
		{
			status = new UserAuthenticationStatus(null,null,false);
		}
		return status;
	}
		
		
	}

