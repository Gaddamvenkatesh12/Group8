package com.super10.medic.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.super10.medic.model.Medicine;
import com.super10.medic.repository.MedicineRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "api")
public class MedicineController {
	private byte[] bytes;

	@Autowired
	private MedicineRepository medicineRepository;
	
	
	
	@GetMapping("/medicines")
	public List<Medicine> getMedicines() {
		return medicineRepository.findAll();
	}
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}
	@PostMapping("/medicine")
	public void createMedicine(@RequestBody Medicine medicine) throws IOException {
		medicine.setPicByte(this.bytes);
		medicineRepository.save(medicine);
		this.bytes = null;
		
	}
	@PutMapping("/update")
	public void updateMedicine(@RequestBody Medicine medicine) {
		medicineRepository.save(medicine);
	}

	@DeleteMapping(path = { "/{id}" })
	public Medicine deleteMedicine(@PathVariable("id") long id) {
		Medicine medicine = medicineRepository.getOne(id);
		medicineRepository.deleteById(id);
		return medicine;
	}
	
}
