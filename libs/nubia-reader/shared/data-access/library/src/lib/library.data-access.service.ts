import { Injectable } from '@angular/core';
import { Gamebook } from '@nubia/shared/api-interfaces';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryDataAccessService extends EntityCollectionServiceBase<Gamebook> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Gamebook', serviceElementsFactory);
  }

  getLibrary(): Observable<Array<Gamebook>> {
    return this.getAll();
  }
}
