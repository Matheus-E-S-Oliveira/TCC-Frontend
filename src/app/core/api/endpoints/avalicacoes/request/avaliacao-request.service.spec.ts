import { TestBed } from '@angular/core/testing';

import { AvaliacaoRequestService } from './avaliacao-request.service';

describe('AvaliacaoRequestService', () => {
  let service: AvaliacaoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacaoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
