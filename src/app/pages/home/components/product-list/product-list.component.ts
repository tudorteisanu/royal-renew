import { Component, OnInit } from '@angular/core';
import { CategoriesMixinComponent } from 'src/app/pages/home/mixins/CategoriesMixinComponent';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent extends CategoriesMixinComponent implements OnInit {}
