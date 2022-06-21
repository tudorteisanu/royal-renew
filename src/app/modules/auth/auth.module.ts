import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@App/modules/auth/views/login/login.component';
import { RegisterComponent } from '@App/modules/auth/views/register/register.component';
import { ForgotPasswordComponent } from '@App/modules/auth/views/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '@App/modules/auth/views/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from '@App/components/dialogs/dialog.module';
import { ComponentsModule } from '@App/components/components/components.module';
import { FormComponentsModule } from '@App/components/form-components/form-components.module';
import { AuthRoutingModule } from '@App/modules/auth/auth-routing.module';
import { ChangePasswordComponent } from '@App/modules/auth/views/change-password/change-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    DialogModule,
    ComponentsModule,
    FormComponentsModule,
  ],
})
export class AuthModule {}
