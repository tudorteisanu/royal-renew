import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { LoginInterface, RegisterInterface } from 'src/app/ts/interfaces/auth';
import { Observable, of } from 'rxjs';
import { SiteSettings } from 'src/app/settings/siteSettings';
import { EndpointsInterface } from 'src/app/ts/interfaces/siteSettings';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  protected readonly http: HttpService;

  private readonly endpoints: EndpointsInterface;

  constructor(httpService: HttpService) {
    this.http = httpService;
    this.endpoints = SiteSettings.endpoints;
  }

  public login(payload: any): Observable<LoginInterface> {
    return this.http.post(this.endpoints.login, payload);
  }

  public register(payload: RegisterInterface): Observable<RegisterInterface> {
    return this.http.post(this.endpoints.register, payload);
  }

  public checkAuth(): Observable<boolean> {
    return of(true);
    // return this.http.get(this.endpoints.checkAuth);
  }

  public changePassword(payload: RegisterInterface): Observable<RegisterInterface> {
    return this.http.post(this.endpoints.changePassword, payload);
  }
}
