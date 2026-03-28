import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpployesComponent } from './view-empployes.component';

describe('ViewEmpployesComponent', () => {
  let component: ViewEmpployesComponent;
  let fixture: ComponentFixture<ViewEmpployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpployesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
