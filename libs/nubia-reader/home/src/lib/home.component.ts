import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { GamebookDataAccessService } from '@nubia/nubia-reader/shared/data-access';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  gamebooks$: Observable<Gamebook[]> | undefined;
  constructor(private gamebookDataAccessService: GamebookDataAccessService) {}

  ngOnInit() {
    this.gamebooks$ = this.gamebookDataAccessService.getLibraryGamebooks();
  }
}
