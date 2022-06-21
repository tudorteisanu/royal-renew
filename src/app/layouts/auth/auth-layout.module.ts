import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from '@App/components/dialogs/dialog.module';
import { ComponentsModule } from '@App/components/components/components.module';
import { FormComponentsModule } from '@App/components/form-components/form-components.module';
import { AuthLayoutRoutingModule } from '@App/layouts/auth/auth-layout-routing.module';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule,
    ComponentsModule,
    FormComponentsModule,
    AuthLayoutRoutingModule,
  ],
})
export class AuthLayoutModule {}
