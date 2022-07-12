import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  readonly contacts: Array<string> = [
    'navbar.delivery',
    'navbar.install',
    'navbar.contacts',
    'navbar.whereToBuy',
    'navbar.about',
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
