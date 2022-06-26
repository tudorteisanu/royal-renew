import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/layouts/default/default-layout/default-layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'product-list',
        loadChildren: () =>
          import('src/app/pages/product-list/product-list.module').then((m) => m.ProductListModule),
      },
      {
        path: 'product/:id',
        loadChildren: () =>
          import('src/app/pages/product/product.module').then((m) => m.ProductModule),
      },
    ],
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
