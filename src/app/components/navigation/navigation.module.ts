import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent,
    FooterComponent,
    ScheduleComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ProgressBarComponent,
    FooterComponent,
    ScheduleComponent,
  ],
  imports: [CommonModule, RouterModule, TranslateModule],
})
export class NavigationModule {}
