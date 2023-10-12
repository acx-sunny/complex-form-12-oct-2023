/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchemasService } from './schemas.service';

describe('Service: Schemas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemasService]
    });
  });

  it('should ...', inject([SchemasService], (service: SchemasService) => {
    expect(service).toBeTruthy();
  }));
});
