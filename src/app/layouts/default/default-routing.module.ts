import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '@App/layouts/default/default-layout/default-layout.component';
import { AuthGuard } from '@App/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@App/pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'product-list',
        loadChildren: () =>
          import('@App/pages/product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: 'product/:id',
        loadChildren: () =>
          import('@App/pages/product/product.module').then(
            (m) => m.ProductModule
          ),
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
