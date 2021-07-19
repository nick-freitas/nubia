import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LibraryDataAccessService } from '@nubia/nubia-reader/shared/data-access/library';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
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
