import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { LibraryStoreServiceService } from '@nubia/nubia-reader/gamebook-library-store';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class LibraryDataAccessService {
  loading$: Observable<boolean> | Store<boolean>;
  entities$: Observable<Gamebook[]> | Store<Gamebook[]>;

  constructor(private libraryStoreServiceService: LibraryStoreServiceService) {
    this.loading$ = this.libraryStoreServiceService.loading$;
    this.entities$ = this.libraryStoreServiceService.entities$;
  }

  getLibrary(): Observable<Array<Gamebook>> {
    return this.libraryStoreServiceService.getAll();
  }

  getById(id: string): Observable<Gamebook> {
    return this.libraryStoreServiceService.getByKey(id);
  }
}
