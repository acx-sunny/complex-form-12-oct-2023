/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerateUniqueIdService } from './generate-unique-id.service';

describe('Service: GenerateUniqueId', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateUniqueIdService]
    });
  });

  it('should ...', inject([GenerateUniqueIdService], (service: GenerateUniqueIdService) => {
    expect(service).toBeTruthy();
  }));
});
