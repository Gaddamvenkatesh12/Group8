import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedistoreComponent } from './medistore.component';

describe('MedistoreComponent', () => {
  let component: MedistoreComponent;
  let fixture: ComponentFixture<MedistoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedistoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedistoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
