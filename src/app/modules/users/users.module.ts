import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersCreateComponent } from './views/users-create/users-create.component';
import { UsersEditComponent } from './views/users-edit/users-edit.component';
import { UsersListComponent } from './views/users-list/users-list.component';
import { FormComponentsModule } from '@App/components/form-components/form-components.module';
import { ComponentsModule } from '@App/components/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersCreateComponent, UsersEditComponent, UsersListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ComponentsModule,
    FormComponentsModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
