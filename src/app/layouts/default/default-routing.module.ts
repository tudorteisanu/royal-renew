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
          import('src/app/pages/products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'product/:id',
        loadChildren: () =>
          import('src/app/pages/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'novelties',
        loadChildren: () =>
          import('src/app/pages/novelties/novelties.module').then((m) => m.NoveltiesModule),
      },
      {
        path: 'about',
        loadChildren: () => import('src/app/pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'delivery',
        loadChildren: () =>
          import('src/app/pages/delivery/delivery.module').then((m) => m.DeliveryModule),
      },
      {
        path: 'install',
        loadChildren: () =>
          import('src/app/pages/install/install.module').then((m) => m.InstallModule),
      },
      {
        path: 'where-to-buy',
        loadChildren: () =>
          import('src/app/pages/where-to-buy/where-to-buy.module').then((m) => m.WhereToBuyModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('src/app/pages/contacts/contacts.module').then((m) => m.ContactsModule),
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
