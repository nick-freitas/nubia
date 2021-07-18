import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GamebookService } from './gamebook.service';

describe('GamebookService', () => {
  let service: GamebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GamebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
