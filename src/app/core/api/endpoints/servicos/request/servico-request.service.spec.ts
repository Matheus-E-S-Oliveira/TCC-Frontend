import { TestBed } from '@angular/core/testing';

import { ServicoRequestService } from './servico-request.service';

describe('ServicoRequestService', () => {
  let service: ServicoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
