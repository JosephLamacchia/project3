import { TestBed } from '@angular/core/testing';

import { HttpCardsetsService } from './http-cardsets.service';

describe('HttpCardsetsService', () => {
  let service: HttpCardsetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCardsetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
