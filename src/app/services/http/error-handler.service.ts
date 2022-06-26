import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SiteSettings } from 'src/app/settings/siteSettings';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  public ignoredErrors: Array<number> = [];

  private routes;

  private errorsRoutes;

  constructor(private router: Router) {
    this.routes = SiteSettings.routes;
    this.errorsRoutes = SiteSettings.errors;
  }

  handle(ignoredErrors: Array<number>, error: HttpErrorResponse): void {
    if ([...this.ignoredErrors, 422].includes(error.status)) {
      return;
    }

    switch (error.status) {
      case 401:
        this.router.navigateByUrl(this.routes.login).then();
        break;
      case 403:
        this.router.navigateByUrl(this.errorsRoutes.permissionDenied).then();
        break;
      case 404:
        this.router.navigateByUrl(this.errorsRoutes.notFound).then();
        break;
      default:
        this.router.navigateByUrl(this.errorsRoutes.internalServerError).then();
    }
  }
}
