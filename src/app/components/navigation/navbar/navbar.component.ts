import { Component } from '@angular/core';
import { NavigationService } from '@App/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private navigationService: NavigationService) {}

  toggle(): void {
    this.navigationService.navigationEvent.next(true);
  }
}
