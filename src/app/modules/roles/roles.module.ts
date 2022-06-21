import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesCreateComponent } from './views/roles-create/roles-create.component';
import { RolesEditComponent } from './views/roles-edit/roles-edit.component';
import { RolesListComponent } from './views/roles-list/roles-list.component';
import { FormComponentsModule } from '@App/components/form-components/form-components.module';
import { ComponentsModule } from '@App/components/components/components.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [RolesCreateComponent, RolesEditComponent, RolesListComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormComponentsModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
})
export class RolesModule {}
