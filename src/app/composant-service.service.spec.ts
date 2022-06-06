import { TestBed } from '@angular/core/testing';

import { ComposantServiceService } from './composant-service.service';

describe('ComposantServiceService', () => {
  let service: ComposantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
