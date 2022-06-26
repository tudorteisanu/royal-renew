import { Component } from '@angular/core';
import { CategoriesMixinComponent } from '../home/mixins/CategoriesMixinComponent';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent extends CategoriesMixinComponent {}
