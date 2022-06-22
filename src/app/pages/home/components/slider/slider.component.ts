import { Component, OnInit } from '@angular/core';
import { CategoriesMixin } from '@App/pages/home/mixins/categoriesMixin';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent extends CategoriesMixin implements OnInit {}
