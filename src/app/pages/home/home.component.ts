import { Component } from '@angular/core';
import { CategoriesMixinComponent } from './mixins/CategoriesMixinComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends CategoriesMixinComponent {}
