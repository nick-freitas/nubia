import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GamebookDataAccessService } from './gamebook.data-access.service';

describe('GamebookService', () => {
  let service: GamebookDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GamebookDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
