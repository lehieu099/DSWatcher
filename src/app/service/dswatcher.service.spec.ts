import { TestBed } from '@angular/core/testing';

import { DSwatcherService } from './dswatcher.service';

describe('DSwatcherService', () => {
  let service: DSwatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DSwatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
