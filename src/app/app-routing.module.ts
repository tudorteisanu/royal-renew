import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/layouts/auth/auth-layout.module').then((m) => m.AuthLayoutModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/layouts/default/default.module').then((m) => m.DefaultModule),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
