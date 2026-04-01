import { TestBed } from '@angular/core/testing';

import { ItemployesService } from './itemployes.service';

describe('ItemployesService', () => {
  let service: ItemployesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemployesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
