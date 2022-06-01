import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSelectionComponent } from './access-selection.component';

describe('AccessSelectionComponent', () => {
  let component: AccessSelectionComponent;
  let fixture: ComponentFixture<AccessSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
