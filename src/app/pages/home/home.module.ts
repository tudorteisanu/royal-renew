import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HomeRoutingModule } from 'src/app/pages/home/home-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesMixinComponent } from 'src/app/pages/home/mixins/CategoriesMixinComponent';
import { SalesComponent } from './components/sales/sales.component';
import { NoveltiesComponent } from './components/novelties/novelties.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ProductListComponent,
    CategoriesMixinComponent,
    SalesComponent,
    NoveltiesComponent,
    DetailsComponent,
  ],
  exports: [HomeComponent, SliderComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule, TranslateModule],
})
export class HomeModule {}
