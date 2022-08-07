import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoveltiesComponent } from './novelties.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../components/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: NoveltiesComponent,
  },
];

@NgModule({
  declarations: [NoveltiesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
})
export class NoveltiesModule {}
