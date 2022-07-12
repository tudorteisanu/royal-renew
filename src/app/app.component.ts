import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';

  constructor(private translateService: TranslateService, private store: StoreService) {
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
  }
}
