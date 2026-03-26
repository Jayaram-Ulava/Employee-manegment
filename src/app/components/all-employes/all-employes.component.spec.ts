import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployesComponent } from './all-employes.component';

describe('AllEmployesComponent', () => {
  let component: AllEmployesComponent;
  let fixture: ComponentFixture<AllEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
