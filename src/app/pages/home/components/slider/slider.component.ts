import { Component, OnInit } from '@angular/core';
import { CategoriesMixinComponent } from 'src/app/pages/home/mixins/CategoriesMixinComponent';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent extends CategoriesMixinComponent implements OnInit {}
