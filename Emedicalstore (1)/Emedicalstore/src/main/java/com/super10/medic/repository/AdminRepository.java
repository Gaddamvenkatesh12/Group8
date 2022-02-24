package com.super10.medic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.super10.medic.model.AdminLogin;


@Repository
public interface AdminRepository extends JpaRepository<AdminLogin, Integer>
{
	AdminLogin findByNameAndPassword(String name , String password);

}
