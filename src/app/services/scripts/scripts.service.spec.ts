/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScriptsService } from './scripts.service';

describe('Service: Scripts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptsService]
    });
  });

  it('should ...', inject([ScriptsService], (service: ScriptsService) => {
    expect(service).toBeTruthy();
  }));
});
