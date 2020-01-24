import { TestBed } from '@angular/core/testing';

import { EmpleService } from './emple.service';

describe('EmpleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleService = TestBed.get(EmpleService);
    expect(service).toBeTruthy();
  });
});
