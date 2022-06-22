import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeStoreService {
  categories = [
    {
      title: '3Д Панэли',
      url: 'assets/images/categories_1.png',
    },
    {
      title: 'Карнизы',
      url: 'assets/images/categories_1.png',
    },
    {
      title: 'Молдинги',
      url: 'assets/images/categories_1.png',
    },
    {
      title: 'Камины',
      url: 'assets/images/categories_4.png',
    },
    {
      title: 'Колоны',
      url: 'assets/images/categories_5.png',
    },
    {
      title: 'Потолки',
    },
    {
      title: 'Кирпичи',
    },
    {
      title: '3Д обои',
    },
    {
      title: 'Краски',
    },
    {
      title: 'Штукатурки',
    },
  ];

  categoriesEvent = new BehaviorSubject(this.categories);

  constructor() {}
}
