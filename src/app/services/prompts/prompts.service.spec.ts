/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromptsService } from './prompts.service';

describe('Service: Prompts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromptsService]
    });
  });

  it('should ...', inject([PromptsService], (service: PromptsService) => {
    expect(service).toBeTruthy();
  }));
});
