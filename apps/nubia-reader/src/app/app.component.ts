import { Component, OnInit } from '@angular/core';
import { GamebookDataAccessService } from '@nubia/nubia-reader/shared/data-access';
import { Observable } from 'rxjs';
import { Gamebook } from '@nubia/shared/api-interfaces';

@Component({
  selector: 'reader-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nubia-reader';
  gamebooks$: Observable<Gamebook[]> | undefined;

  constructor(private gamebookDataAccessService: GamebookDataAccessService) {}

  ngOnInit() {
    this.gamebooks$ = this.gamebookDataAccessService.getLibraryGamebooks();
    console.log('a');
  }
}
