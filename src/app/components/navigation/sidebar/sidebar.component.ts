import { Component, OnInit } from '@angular/core';
import menu from '@App/static/data/menu';
import { MenuListInterface } from '@App/interfaces/menu';
import packageJson from 'package.json';
import { NavigationService } from '@App/services/navigation.service';
import { sidebarAnimation } from '@App/components/navigation/sidebar/animations';
import { SideBarAnimations } from '@App/components/navigation/sidebar/enum';
import { StoreService } from '@App/store/store.service';
import { ConfirmService } from '@App/services/confirm.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [sidebarAnimation],
})
export class SidebarComponent implements OnInit {
  items: MenuListInterface = [];
  show = false;
  public version: string = packageJson.version;

  constructor(
    private navigation: NavigationService,
    private store: StoreService,
    private confirm: ConfirmService
  ) {
    navigation.navigationEvent.subscribe(() => {
      this.show = !this.show;
    });
  }

  ngOnInit(): void {
    this.items = menu;
  }

  iconClass(icon: string): string {
    return `mdi ${icon}`;
  }

  get animation(): string {
    if (this.show) {
      return SideBarAnimations.OPEN;
    }

    return SideBarAnimations.CLOSED;
  }

  logout(): void {
    this.store.auth.logout();
  }

  showConfirm(): void {
    this.confirm.openConfirm({
      accept: () => {
        this.logout();
      },
    });
  }
}
