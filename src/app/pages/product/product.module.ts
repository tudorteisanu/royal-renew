import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from 'src/app/pages/product/product-routing.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
