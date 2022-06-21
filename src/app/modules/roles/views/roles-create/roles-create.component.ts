import { Component } from '@angular/core';
import { RoleInterface } from '@App/modules/roles/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@App/api/api.service';
import { AlertService } from '@App/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roles-create',
  templateUrl: './roles-create.component.html',
  styleUrls: ['./roles-create.component.scss'],
})
export class RolesCreateComponent {
  model: any;
  roles: Array<RoleInterface> = [];
  errorMessages: any = {};

  constructor(
    public formBuilder: FormBuilder,
    protected readonly api: ApiService,
    protected readonly alert: AlertService,
    private router: Router,
    protected route: ActivatedRoute
  ) {
    this.model = this.createForm();
  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: ['', [Validators.minLength(2), Validators.maxLength(100)]],
      alias: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  toList(): void {
    this.router.navigate(['./roles']).then((r) => r);
  }

  public submit(): void {
    this.model.markAllAsTouched();

    if (this.model.valid) {
      this.errorMessages = {};
      this.api
        .roles()
        .create(this.model.value)
        .subscribe(
          () => {
            this.alert.showSuccess('Successful created');
            this.toList();
          },
          (e) => {
            if (e.hasOwnProperty('errors')) {
              this.errorMessages = e.errors;
            }

            this.alert.showError(e?.message);
          }
        );
    }
  }

  public reset(): void {
    this.model.reset();
  }
}
