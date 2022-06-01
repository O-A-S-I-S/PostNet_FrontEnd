import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicSignUpComponent } from './medic-sign-up.component';

describe('MedicSignUpComponent', () => {
  let component: MedicSignUpComponent;
  let fixture: ComponentFixture<MedicSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
