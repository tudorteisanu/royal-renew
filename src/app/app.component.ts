import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from './store/store.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';
  showLoader: boolean = false;

  constructor(
    private translateService: TranslateService,
    private store: StoreService,
    private router: Router,
  ) {
    translateService.addLangs(['en', 'ro', 'ru']);

    let storageLang = localStorage.getItem('language')!;

    if (!storageLang || !translateService.getLangs().includes(storageLang)) {
      const browserLang = translateService.getBrowserLang();

      if (browserLang && translateService.getLangs().includes(browserLang)) {
        storageLang = browserLang;
      } else {
        storageLang = 'en';
      }
    }

    translateService.use(storageLang);
    store.localization.currentLang = storageLang;
    router.events.subscribe((routerEvent: any) => {
      this.checkRouteChange(routerEvent);
    });
  }

  checkRouteChange(routerEvent: RouterEvent) {
    // if route change started
    if (routerEvent instanceof NavigationStart) {
      this.showLoader = true;
    }

    // if route change ended
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      setTimeout(() => {
        this.showLoader = false;
      }, 300);
    }
  }
}
