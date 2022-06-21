import { Component, OnInit } from '@angular/core';
import { ApiService } from '@App/api/api.service';
import { AlertService } from '@App/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { StoreService } from '@App/store/store.service';
import { RoutesInterface } from '@App/interfaces/siteSettings';
import { SiteSettings } from '@App/settings/siteSettings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any;
  public readonly routes: RoutesInterface;

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private store: StoreService
  ) {
    this.model = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ],
      ],
    });
    this.routes = SiteSettings.routes;
  }

  ngOnInit(): void {}

  login(): void {
    this.api
      .auth()
      .login(this.model.value)
      .subscribe(
        (response: any) => {
          this.store.auth.login(response);
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }
}
