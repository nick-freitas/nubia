import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ApiUrlInjectionToken } from '@nubia/nubia-reader/tokens';
import { User } from '@nubia/shared/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User | null>;
  private user: BehaviorSubject<User | null>;
  private storageKey: string;

  constructor(
    @Inject(ApiUrlInjectionToken) private apiUrl: string,
    private httpClient: HttpClient
  ) {
    this.storageKey = 'NUBIA_GAMEBOOKS_USER';
    this.user = new BehaviorSubject<User | null>(null);
    this.user$ = this.user.asObservable();

    const storedUser = this.getUserFromStorage();
    if (storedUser?.id) {
      this.setUser(storedUser, false);
    }
  }

  public login(
    email: string,
    password: string,
    rememberMe: boolean
  ): Observable<User> {
    return this.httpClient
      .post<User>(`${this.apiUrl}/login`, { email, password })
      .pipe(tap((user) => this.setUser(user, rememberMe)));
  }

  public register(email: string, password: string, name: string) {
    return this.httpClient
      .post<User>(`${this.apiUrl}/register`, { email, password, name })
      .pipe(tap((user) => this.setUser(user, true)));
  }

  private setUser(user: User, save: boolean) {
    this.user.next(user);

    if (save) {
      return this.saveUserIntoStorage(user);
    }

    return this.saveUserIntoStorage();
  }

  private getUserFromStorage(): User | null {
    const user = localStorage.getItem(this.storageKey);
    if (!user) return null;

    return JSON.parse(user);
  }

  private saveUserIntoStorage(user?: User): void {
    if (user) {
      return localStorage.setItem(this.storageKey, JSON.stringify(user));
    }

    localStorage.removeItem(this.storageKey);
  }
}
