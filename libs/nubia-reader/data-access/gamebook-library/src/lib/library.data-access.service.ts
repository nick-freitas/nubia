import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { Store } from '@ngrx/store';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class LibraryDataAccessService {
  libraryEntityService: EntityCollectionService<Gamebook>;
  loading$: Observable<boolean> | Store<boolean>;
  // entities$: Observable<Gamebook[]> | Store<Gamebook[]>;

  constructor(
    private entityCollectionServiceFactory: EntityCollectionServiceFactory
  ) {
    this.libraryEntityService =
      this.entityCollectionServiceFactory.create<Gamebook>('Gamebook');
    this.loading$ = this.libraryEntityService.loading$;
  }

  getLibrary(): Observable<Array<Gamebook>> {
    return this.libraryEntityService.getAll();
  }

  getById(id: string): Observable<Gamebook> {
    return this.libraryEntityService.getByKey(id);
  }
}
