import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCreateComponent } from '@App/modules/users/views/users-create/users-create.component';
import { UsersListComponent } from '@App/modules/users/views/users-list/users-list.component';
import { UsersEditComponent } from '@App/modules/users/views/users-edit/users-edit.component';

const routes: Routes = [
  {
    path: 'create',
    component: UsersCreateComponent,
  },
  {
    path: 'edit/:id',
    component: UsersEditComponent,
  },
  {
    path: '',
    component: UsersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
