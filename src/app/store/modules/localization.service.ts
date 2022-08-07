import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  currentLang: string = 'en';

  constructor() {}
}
