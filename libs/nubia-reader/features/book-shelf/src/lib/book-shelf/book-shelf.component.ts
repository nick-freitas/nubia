import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { LibraryDataAccessService } from '@nubia/nubia-reader/data-access/gamebook-library';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookShelfComponent implements OnInit {
  gamebooks$: Observable<Gamebook[]> | undefined;
  loading$: Observable<boolean>;

  constructor(private libraryDataAccessService: LibraryDataAccessService) {
    this.loading$ = this.libraryDataAccessService.loading$;
  }

  ngOnInit() {
    this.gamebooks$ = this.libraryDataAccessService.getLibrary();
  }
}
