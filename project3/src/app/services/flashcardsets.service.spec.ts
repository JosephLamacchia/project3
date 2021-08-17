import { TestBed } from '@angular/core/testing';

import { FlashcardsetsService } from './flashcardsets.service';

describe('FlashcardsetsService', () => {
  let service: FlashcardsetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
