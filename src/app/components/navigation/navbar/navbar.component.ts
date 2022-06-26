import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  constructor(private navigationService: NavigationService) {}

  toggle(): void {
    this.navigationService.navigationEvent.next(true);
  }
}
