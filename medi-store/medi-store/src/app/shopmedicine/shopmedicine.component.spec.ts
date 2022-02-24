import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmedicineComponent } from './shopmedicine.component';

describe('ShopmedicineComponent', () => {
  let component: ShopmedicineComponent;
  let fixture: ComponentFixture<ShopmedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopmedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
