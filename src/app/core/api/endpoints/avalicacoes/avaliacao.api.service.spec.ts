import { TestBed } from '@angular/core/testing';

import { AvaliacaoApiService } from './avaliacao.api.service';

describe('AvaliacaoApiService', () => {
  let service: AvaliacaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
