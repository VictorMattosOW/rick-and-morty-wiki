/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonagensService } from './personagens.service';

describe('Service: Personagens', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonagensService]
    });
  });

  it('should ...', inject([PersonagensService], (service: PersonagensService) => {
    expect(service).toBeTruthy();
  }));
});
