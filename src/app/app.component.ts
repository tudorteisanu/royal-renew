import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';

  constructor(private localizeService: TranslateService) {
    localizeService.setDefaultLang(localizeService.getBrowserLang() || 'en')
    localizeService.get('mega.man').subscribe(data=> console.log(data));
  }
}
