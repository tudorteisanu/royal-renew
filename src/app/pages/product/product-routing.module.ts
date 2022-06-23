import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProductRoutingModule {}
