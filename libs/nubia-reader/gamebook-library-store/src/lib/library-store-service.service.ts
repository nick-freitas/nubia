import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Gamebook } from '@nubia/shared/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class LibraryStoreServiceService extends EntityCollectionServiceBase<Gamebook> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Gamebook', serviceElementsFactory);
  }
}
