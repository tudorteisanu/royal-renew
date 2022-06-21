import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigationEvent: EventEmitter<any> = new EventEmitter<any>();

  toggle() {
    this.navigationEvent.next(true);
  }
}
