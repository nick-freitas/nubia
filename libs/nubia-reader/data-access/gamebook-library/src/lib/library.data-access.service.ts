import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { ReaderApiUrlInjectionToken } from '@nubia/nubia-reader/tokens';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class LibraryDataAccessService {
  private libraryEntityService: EntityCollectionService<Gamebook>;
  loading$: Observable<boolean> | Store<boolean>;
  // entities$: Observable<Gamebook[]> | Store<Gamebook[]>;

  constructor(
    @Inject(ReaderApiUrlInjectionToken) private readerApiUrl: string,
    private entityCollectionServiceFactory: EntityCollectionServiceFactory,
    private httpClient: HttpClient
  ) {
    this.libraryEntityService =
      this.entityCollectionServiceFactory.create<Gamebook>('Gamebook');
    this.loading$ = this.libraryEntityService.loading$;
  }

  getLibrary(): Observable<Array<Gamebook>> {
    return this.libraryEntityService.getAll();
  }

  getById(id: string): Observable<Gamebook> {
    this.libraryEntityService.setLoading(true);
    return this.libraryEntityService.getByKey(id);
  }

  makeProgessionChoice(
    gamebookId: string,
    progressionId: string
  ): Observable<Gamebook> {
    //todo: getting gamebook info 2x, instead of getById store make result instead
    return this.httpClient
      .post<Gamebook>(
        `${this.readerApiUrl}/gamebook/${gamebookId}/progression/${progressionId}`,
        {}
      )
      .pipe(
        tap((gamebook) =>
          this.libraryEntityService.dispatcher.updateOneInCache(gamebook)
        )
      );
  }

  goBack(gamebookId: string): Observable<Gamebook> {
    return this.httpClient
      .post<Gamebook>(
        `${this.readerApiUrl}/gamebook/${gamebookId}/previous-choice`,
        {}
      )
      .pipe(
        tap((gamebook) =>
          this.libraryEntityService.dispatcher.updateOneInCache(gamebook)
        )
      );
  }

  resetChoices(gamebookId: string): Observable<Gamebook> {
    return this.httpClient
      .post<Gamebook>(
        `${this.readerApiUrl}/gamebook/${gamebookId}/reset-choices`,
        {}
      )
      .pipe(
        tap((gamebook) =>
          this.libraryEntityService.dispatcher.updateOneInCache(gamebook)
        )
      );
  }
}
