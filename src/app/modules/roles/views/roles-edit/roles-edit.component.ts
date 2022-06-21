import { Component, OnInit } from '@angular/core';
import { RolesCreateComponent } from '@App/modules/roles/views/roles-create/roles-create.component';
import { RoleInterface } from '@App/modules/roles/interfaces';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss'],
})
export class RolesEditComponent extends RolesCreateComponent implements OnInit {
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.api
      .roles()
      .findOne(this.route.snapshot.params['id'])
      .subscribe(
        (data: RoleInterface) => {
          this.model.patchValue({ ...data });
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }

  override submit() {
    if (this.model.valid) {
      this.api
        .roles()
        .update(this.route.snapshot.params['id'], this.model.value)
        .subscribe(
          () => {
            this.alert.showSuccess('Successful updated');
            this.toList();
          },
          (e) => {
            this.alert.showError(e?.message);
          }
        );
    }
  }
}
