import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styles: [],
})
export class SalesComponent {
  items = [
    {
      title: 'Карнмзы CP3',
      price: 99,
      sale: 25,
    },
    {
      title: '3Д Панэли',
      price: 129,
      sale: 25,
    },
    {
      title: 'Карнмзы CP6',
      price: 129,
      sale: 10,
    },
    {
      title: 'Карнмзы CP8',
      price: 129,
      sale: 30,
    },
  ];
}
