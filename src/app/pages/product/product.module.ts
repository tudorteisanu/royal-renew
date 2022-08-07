import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from 'src/app/pages/product/product-routing.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, LayoutModule],
})
export class ProductModule {}
