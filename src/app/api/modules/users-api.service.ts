import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '@App/modules/users/interfaces';
import { HttpService } from '@App/services/http/http.service';
import { SiteSettings } from '@App/settings/siteSettings';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private http: HttpService;
  private readonly endpoints;

  constructor(private httpService: HttpService) {
    this.http = httpService;
    this.endpoints = SiteSettings.endpoints;
  }

  find(params: any = {}): Observable<any> {
    return this.http.setParams(params).get(this.endpoints.users);
  }

  create(payload: any): Observable<any> {
    return this.http
      .ignoreErrorHandler(433, 203)
      .post(this.endpoints.users, payload);
  }

  findOne(id: number): Observable<any> {
    return this.http
      .ignoreErrorHandler(404, 500)
      .get(`${this.endpoints.users}/${id}`);
  }

  update(id: number, payload: Partial<UserInterface>): Observable<any> {
    return this.http
      .ignoreErrorHandler(433, 203)
      .patch(`${this.endpoints.users}/${id}`, payload);
  }

  remove(id: number): Observable<any> {
    return this.http
      .ignoreErrorHandler(422, 500, 404)
      .delete(`${this.endpoints.users}/${id}`);
  }
}
