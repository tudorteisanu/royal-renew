import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from 'src/app/pages/product-list/product-list-routing.module';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [ProductListComponent, ProductFilterComponent],
  imports: [CommonModule, ProductListRoutingModule],
})
export class ProductListModule {}
