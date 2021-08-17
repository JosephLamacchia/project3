import { TestBed } from '@angular/core/testing';

import { HttpFlashcardsetService } from './http-flashcardset.service';

describe('HttpFlashcardsetService', () => {
  let service: HttpFlashcardsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFlashcardsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
