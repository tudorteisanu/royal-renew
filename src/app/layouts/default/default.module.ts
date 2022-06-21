import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DialogModule } from '@App/components/dialogs/dialog.module';
import { NavigationModule } from '@App/components/navigation/navigation.module';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, DefaultRoutingModule, DialogModule, NavigationModule],
})
export class DefaultModule {}
