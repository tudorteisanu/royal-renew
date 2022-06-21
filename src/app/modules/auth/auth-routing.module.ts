import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@App/modules/auth/views/login/login.component';
import { RegisterComponent } from '@App/modules/auth/views/register/register.component';
import { ForgotPasswordComponent } from '@App/modules/auth/views/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '@App/modules/auth/views/change-password/change-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
