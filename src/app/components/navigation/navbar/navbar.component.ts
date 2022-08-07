import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { TranslateService } from '@ngx-translate/core';
import { PageRoutes } from '../../../ts/enum';

interface LinkInterface {
  translateKey: string;
  path: PageRoutes;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  readonly links: Array<LinkInterface> = [
    {
      translateKey: 'navbar.delivery',
      path: PageRoutes.Delivery,
    },
    {
      translateKey: 'navbar.install',
      path: PageRoutes.Install,
    },
    {
      translateKey: 'navbar.contacts',
      path: PageRoutes.Contacts,
    },
    {
      translateKey: 'navbar.whereToBuy',
      path: PageRoutes.WhereToBuy,
    },
    {
      translateKey: 'navbar.about',
      path: PageRoutes.About,
    },
  ];
  constructor(private navigationService: NavigationService, private translate: TranslateService) {}

  get languages(): Array<string> {
    return this.translate.getLangs();
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }

  languageClass(language: string): string {
    if (language === this.currentLang) {
      return 'bg-secondary text-primary';
    }
    return '';
  }

  toggle(): void {
    this.navigationService.navigationEvent.next(true);
  }

  switchLanguage(language: string) {
    if (language === this.translate.currentLang) {
      return;
    }

    localStorage.setItem('language', language);
    location.reload();
  }
}
