import { TestBed } from '@angular/core/testing';

import { JoquesService } from './joques.service';

describe('JoquesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoquesService = TestBed.get(JoquesService);
    expect(service).toBeTruthy();
  });
});
