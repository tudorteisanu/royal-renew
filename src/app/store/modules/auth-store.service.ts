import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CredentialsInterface } from 'src/app/interfaces/credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  key: string = 'credentials';

  credentials: Partial<CredentialsInterface> = JSON.parse(localStorage.getItem(this.key)!) || {};

  credentialsEvent = new BehaviorSubject(this.credentials);

  login(credentials: any): void {
    this.credentials = credentials;
    this.credentialsEvent.next(credentials);
    localStorage.setItem(this.key, JSON.stringify(credentials));
    window.location.href = '/';
  }

  logout(): void {
    this.credentials = {};
    this.credentialsEvent.next({});
    localStorage.removeItem(this.key);
    window.location.href = '/auth/login';
  }
}
