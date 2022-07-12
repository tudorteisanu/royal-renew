import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class LocaleInterceptor implements HttpInterceptor {
  constructor(private store: StoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({ setHeaders: { 'x-localization': this.store.localization.currentLang } }),
    );
  }
}
