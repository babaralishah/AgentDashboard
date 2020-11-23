import { TestBed } from '@angular/core/testing';

import { MapserviceService } from './mapservice.service';

describe('MapserviceService', () => {
  let service: MapserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
