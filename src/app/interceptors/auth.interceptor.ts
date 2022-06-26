import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/store/store.service';
import { CredentialsInterface } from 'src/app/interfaces/credentials';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  credentials: any = {};

  constructor(private store: StoreService) {
    store.auth.credentialsEvent.subscribe((credentials: Partial<CredentialsInterface>) => {
      this.credentials = credentials;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Authorization = `Bearer ${this.credentials?.token}`;
    return next.handle(request.clone({ setHeaders: { Authorization } }));
  }
}
