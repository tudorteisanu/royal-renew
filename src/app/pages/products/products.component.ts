import { Component } from '@angular/core';
import { CategoriesMixinComponent } from '../home/mixins/CategoriesMixinComponent';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent extends CategoriesMixinComponent {}
