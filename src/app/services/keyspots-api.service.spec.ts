import { TestBed, inject } from '@angular/core/testing';

import { KeyspotsApiService } from './keyspots-api.service';

describe('KeyspotsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyspotsApiService]
    });
  });

  it('should be created', inject([KeyspotsApiService], (service: KeyspotsApiService) => {
    expect(service).toBeTruthy();
  }));
});
