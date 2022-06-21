import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  items = [
    {
      title: '3Д Панэли',
      url: 'assets/images/categories_1.png'
    },
    {
      title: 'Карнизы',
      url: 'assets/images/categories_1.png'
    },
    {
      title: 'Молдинги',
      url: 'assets/images/categories_1.png'
    },
    {
      title: 'Камины',
      url: 'assets/images/categories_4.png'
    },
    {
      title: 'Колоны',
      url: 'assets/images/categories_5.png'
    },
    {
      title: 'Потолки'
    },
    {
      title: 'Кирпичи'
    },
    {
      title: '3Д обои'
    },
    {
      title: 'Краски'
    },
    {
      title: 'Штукатурки'
    }
  ]
  constructor() {}

  ngOnInit(): void {}
}
