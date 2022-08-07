import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  exports: [ProductListComponent],
  imports: [CommonModule],
})
export class ProductComponentsModule {}
