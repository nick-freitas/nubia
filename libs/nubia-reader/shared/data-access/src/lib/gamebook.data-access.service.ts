import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { ApiUrlInjectionToken } from '@nubia/nubia-reader/shared/tokens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamebookDataAccessService {
  constructor(
    private http: HttpClient,
    @Inject(ApiUrlInjectionToken) private apiUrl: string
  ) {}

  getLibraryGamebooks(): Observable<Array<Gamebook>> {
    return this.http.get<Array<Gamebook>>(`${this.apiUrl}/library/gamebooks`);
  }
}
