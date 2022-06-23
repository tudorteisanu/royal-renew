import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from '@App/pages/product-list/product-list-routing.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductListRoutingModule],
})
export class ProductListModule {}
