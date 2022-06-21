import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@App/api/api.service';
import { AlertService } from '@App/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleInterface } from '@App/modules/roles/interfaces';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent implements OnInit {
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

  ngOnInit(): void {
    this.loadRoles();
  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: ['', [Validators.minLength(2), Validators.maxLength(20)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', Validators.required],
    });
  }

  protected loadRoles(): void {
    this.api
      .roles()
      .getList()
      .subscribe(
        (data: Array<RoleInterface>) => {
          this.roles = data;
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }

  toList(): void {
    this.router.navigate(['.']).then((r) => r);
  }

  public submit(): void {
    this.model.markAllAsTouched();

    if (this.model.valid) {
      this.errorMessages = {};
      this.api
        .users()
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
