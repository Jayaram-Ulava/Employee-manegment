import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountrsComponent } from './acountrs.component';

describe('AcountrsComponent', () => {
  let component: AcountrsComponent;
  let fixture: ComponentFixture<AcountrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcountrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcountrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
