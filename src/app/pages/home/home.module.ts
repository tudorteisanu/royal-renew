import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HomeRoutingModule } from 'src/app/pages/home/home-routing.module';
import { CategoriesMixinComponent } from 'src/app/pages/home/mixins/CategoriesMixinComponent';
import { SalesComponent } from './components/sales/sales.component';
import { NoveltiesComponent } from './components/novelties/novelties.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DetailsComponent } from './components/details/details.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { ProductComponentsModule } from '../../components/product-components/product-components.module';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    CategoriesMixinComponent,
    SalesComponent,
    NoveltiesComponent,
    DetailsComponent,
  ],
  exports: [HomeComponent, SliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    TranslateModule,
    LayoutModule,
    ProductComponentsModule,
  ],
})
export class HomeModule {}
