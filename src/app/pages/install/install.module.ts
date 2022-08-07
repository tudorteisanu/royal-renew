import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallComponent } from './install.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InstallComponent,
  },
];

@NgModule({
  declarations: [InstallComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)],
})
export class InstallModule {}
