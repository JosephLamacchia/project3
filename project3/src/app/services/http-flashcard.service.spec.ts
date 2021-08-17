import { TestBed } from '@angular/core/testing';

import { HttpFlashcardService } from './http-flashcard.service';

describe('HttpFlashcardService', () => {
  let service: HttpFlashcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFlashcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
