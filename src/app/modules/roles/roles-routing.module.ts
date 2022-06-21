import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesListComponent } from '@App/modules/roles/views/roles-list/roles-list.component';
import { RolesCreateComponent } from '@App/modules/roles/views/roles-create/roles-create.component';
import { RolesEditComponent } from '@App/modules/roles/views/roles-edit/roles-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RolesListComponent,
  },
  {
    path: 'create',
    component: RolesCreateComponent,
  },
  {
    path: 'edit/:id',
    component: RolesEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
