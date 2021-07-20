import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LibraryDataAccessService } from '@nubia/nubia-reader/shared/data-access/library';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'nubia-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookShelfComponent implements OnInit {
  gamebooks$: Observable<Gamebook[]>;
  loading$: Observable<boolean>;

  constructor(private gamebookDataAccessService: LibraryDataAccessService) {
    this.gamebooks$ = this.gamebookDataAccessService.entities$;
    this.loading$ = this.gamebookDataAccessService.loading$;
  }

  ngOnInit() {
    this.gamebookDataAccessService.getLibrary();
  }
}
