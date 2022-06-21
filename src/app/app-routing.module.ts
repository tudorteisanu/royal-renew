import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@App/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@App/layouts/auth/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@App/layouts/default/default.module').then(
        (m) => m.DefaultModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
