import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from 'src/app/services/http/error-handler.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private params: { [key: string]: [value: string] } = {};

  private headers: any = {};

  public ignoredErrors: Array<number> = [];

  constructor(private http: HttpClient, private router: Router) {}

  private handleError(error: any) {
    const errorHandler = new ErrorHandlerService(this.router);
    errorHandler.handle(this.ignoredErrors, error);
    return throwError(() => ({ ...error.error, status: error.status }));
  }

  public get(url: string): any {
    return this.http
      .get(`${environment.apiUrl}/${url}`, {
        headers: this.headers,
        params: this.params,
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  public post(url: string, payload: any): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/${url}`, payload, {
        headers: this.headers,
        params: this.params,
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  public put(url: string, payload: any): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}/${url}`, payload, {
        headers: this.headers,
        params: this.params,
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  public patch(url: string, payload: any): Observable<any> {
    return this.http
      .patch(`${environment.apiUrl}/${url}`, payload, {
        headers: this.headers,
        params: this.params,
      })
      .pipe(catchError(this.handleError));
  }

  public delete(url: string): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}/${url}`, {
        headers: this.headers,
        params: this.params,
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  public setHeaders(headers: any): HttpService {
    for (const item in headers) {
      this.headers[item] = `${headers[item]}`;
    }

    return this;
  }

  public setParams(params: any): HttpService {
    this.params = {
      ...params,
    };
    return this;
  }

  public ignoreErrorHandler(...args: Array<number>): HttpService {
    if (!args.length) {
      this.ignoredErrors = [401, 403, 404, 422, 500];
    } else {
      this.ignoredErrors = args;
    }
    return this;
  }
}
