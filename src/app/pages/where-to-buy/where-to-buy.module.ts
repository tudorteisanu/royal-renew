import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhereToBuyComponent } from './where-to-buy.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WhereToBuyComponent,
  },
];

@NgModule({
  declarations: [WhereToBuyComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)],
})
export class WhereToBuyModule {}
