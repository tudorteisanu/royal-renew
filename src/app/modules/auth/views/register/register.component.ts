import { Component, OnInit } from '@angular/core';
import { ApiService } from '@App/api/api.service';
import { AlertService } from '@App/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesInterface } from '@App/interfaces/siteSettings';
import { SiteSettings } from '@App/settings/siteSettings';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  model: any;
  routes: RoutesInterface;
  constructor(
    private api: ApiService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.model = this.formBuilder.group({
      name: [
        '',
        [
          Validators.minLength(2),
          Validators.required,
          Validators.maxLength(150),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ],
      ],
      password_confirmation: ['', [Validators.required, this.mustMatch]],
    });
    this.routes = SiteSettings.routes;
  }

  mustMatch(control: any) {
    if (control.root.controls?.password?.value !== control.value) {
      return {
        passwordMismatch: true,
      };
    }

    return null;
  }
  ngOnInit(): void {}

  register(): void {
    this.model.markAllAsTouched();

    if (this.model.valid) {
      this.api
        .auth()
        .register(this.model.value)
        .subscribe(
          async (response: any) => {
           await this.router.navigateByUrl(this.routes.login);
          },
          (e) => {
            this.alert.showError(e?.message);
          }
        );
    }
  }
}
