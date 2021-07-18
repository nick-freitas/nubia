import { Injectable } from '@angular/core';
import { Gamebook } from '@nubia/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamebookService {
  constructor(private http: HttpClient) {}

  getLibraryGamebooks(): Observable<Array<Gamebook>> {
    return this.http.get<Array<Gamebook>>('/api/libray/gamebooks');
  }
}
