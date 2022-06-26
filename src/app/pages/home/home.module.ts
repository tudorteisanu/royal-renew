import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HomeRoutingModule } from 'src/app/pages/home/home-routing.module';
import { InfoComponent } from './components/info/info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesMixinComponent } from 'src/app/pages/home/mixins/CategoriesMixinComponent';
import { SalesComponent } from './components/sales/sales.component';
import { NoveltiesComponent } from './components/novelties/novelties.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    InfoComponent,
    ProductListComponent,
    CategoriesMixinComponent,
    SalesComponent,
    NoveltiesComponent,
  ],
  exports: [HomeComponent, SliderComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule],
})
export class HomeModule {}
