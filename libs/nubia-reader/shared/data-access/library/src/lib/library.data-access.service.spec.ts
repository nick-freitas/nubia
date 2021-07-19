import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LibraryDataAccessService } from './gamebook.data-access.service';

describe('LibraryService', () => {
  let service: LibraryDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LibraryDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
