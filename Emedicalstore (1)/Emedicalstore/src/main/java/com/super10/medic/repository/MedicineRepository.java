package com.super10.medic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.super10.medic.model.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
