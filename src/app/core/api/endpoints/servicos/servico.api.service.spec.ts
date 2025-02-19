import { TestBed } from '@angular/core/testing';

import { ServicoApiService } from './servico.api.service';

describe('ServicoApiService', () => {
  let service: ServicoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
