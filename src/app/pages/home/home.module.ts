import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from '@App/pages/home/home.component';
import { HomeRoutingModule } from '@App/pages/home/home-routing.module';
import { InfoComponent } from './components/info/info.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent, InfoComponent, ProductListComponent],
  exports: [HomeComponent, SliderComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
