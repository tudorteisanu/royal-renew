import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from 'src/app/pages/products/products-routing.module';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { ProductComponentsModule } from '../../components/product-components/product-components.module';

@NgModule({
  declarations: [ProductsComponent, ProductFilterComponent],
  imports: [CommonModule, ProductsRoutingModule, LayoutModule, ProductComponentsModule],
})
export class ProductsModule {}
