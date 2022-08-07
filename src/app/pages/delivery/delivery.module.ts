import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent,
  },
];

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)],
})
export class DeliveryModule {}
