import { Component, OnInit } from '@angular/core';
import { UsersCreateComponent } from '@App/modules/users/views/users-create/users-create.component';
import { UserInterface } from '@App/modules/users/interfaces';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent extends UsersCreateComponent implements OnInit {
  override ngOnInit() {
    this.createForm();
    this.loadData();
    this.loadRoles();
  }

  loadData(): void {
    this.api
      .users()
      .findOne(this.route.snapshot.params['id'])
      .subscribe(
        (data: UserInterface) => {
          this.model.patchValue({ ...data });
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }

  override createForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', Validators.required],
    });
  }

  override submit() {
    if (this.model.valid) {
      this.api
        .users()
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
