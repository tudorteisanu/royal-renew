import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, ProgressBarComponent],
  exports: [NavbarComponent, SidebarComponent, ProgressBarComponent],
  imports: [CommonModule, RouterModule],
})
export class NavigationModule {}
