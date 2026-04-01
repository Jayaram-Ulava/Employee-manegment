import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemployesComponent } from './itemployes.component';

describe('ItemployesComponent', () => {
  let component: ItemployesComponent;
  let fixture: ComponentFixture<ItemployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemployesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
