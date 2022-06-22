import { Component, OnInit } from '@angular/core';
import { CategoriesMixin } from '@App/pages/home/mixins/categoriesMixin';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent extends CategoriesMixin implements OnInit {}
