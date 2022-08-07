import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
];

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)],
})
export class ContactsModule {}
