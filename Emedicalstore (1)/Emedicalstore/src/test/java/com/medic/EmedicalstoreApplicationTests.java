package com.medic;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.super10.medic.model.Medicine;
import com.super10.medic.repository.MedicineRepository;
import com.super10.medic.repository.UserRepository;


//import antlr.collections.List;



@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class EmedicalstoreApplicationTests {

	
	@Autowired
	MedicineRepository mRepo;
	
	

	@Test
	@Order(1)
	public void testCreate() {
		
		Medicine m = new Medicine();
		m.setId(25L);
		m.setName("rk");
		m.setCompany("lot");
		m.setPrice("200");
		m.setPicByte(null);
		mRepo.save(m);
		assertNotNull(mRepo.findById(25L).get());
		
	}
	
		@Test
		@Order(2)
		public void testReadAll() {
    		java.util.List<Medicine> list =   mRepo.findAll();
    		assertThat(list).size().isGreaterThan(0);
    		

    	}
		
		@Test
		@Order(3)
		public void testSingleProduct () {
			Medicine medicine = mRepo.findById(16L).get();
			assertEquals("200",medicine.getPrice());
		}
		
		@Test
		@Order(4)
		public void testUpdate() {
			Medicine m = mRepo.findById(16L).get();
			m.setPrice("100");
			mRepo.save(m);
			assertNotEquals("200",mRepo.findById(16L).get().getPrice());
			
		}
		
		@Test
		@Order(5)
		public void testDelete() {
			mRepo.deleteById(16L);
			assertThat(mRepo.existsById(16L)).isFalse();
		}
		
		
		
		
	
}
















