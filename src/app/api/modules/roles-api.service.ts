import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleInterface } from '@App/modules/roles/interfaces';
import { HttpService } from '@App/services/http/http.service';
import { HeaderInterface } from '@App/interfaces/header';
import { SiteSettings } from '@App/settings/siteSettings';

@Injectable({
  providedIn: 'root',
})
export class RolesApiService {
  protected readonly http: HttpService;
  private endpoints;
  constructor(httpService: HttpService) {
    this.http = httpService;
    this.endpoints = SiteSettings.endpoints;
  }

  find(params: any = {}): Observable<{
    items: RoleInterface[];
    headers: HeaderInterface<RoleInterface>[];
  }> {
    return this.http.setParams(params).get(this.endpoints.roles);
  }

  create(payload: any): Observable<any> {
    return this.http.post(this.endpoints.roles, payload);
  }

  findOne(id: number): Observable<RoleInterface> {
    return this.http.get(`${this.endpoints.roles}/${id}`);
  }

  getList(): Observable<any> {
    return this.http.get(this.endpoints.rolesList);
  }

  update(
    id: number,
    payload: Partial<RoleInterface>
  ): Observable<RoleInterface> {
    return this.http.patch(`${this.endpoints.roles}/${id}`, payload);
  }

  remove(id: number): Observable<RoleInterface> {
    return this.http.delete(`${this.endpoints.roles}/${id}`);
  }
}
