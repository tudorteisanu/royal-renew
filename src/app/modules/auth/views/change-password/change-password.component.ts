import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RoutesInterface } from '@App/interfaces/siteSettings';
import { ApiService } from '@App/api/api.service';
import { AlertService } from '@App/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { StoreService } from '@App/store/store.service';
import { SiteSettings } from '@App/settings/siteSettings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  model: any;
  public readonly routes: RoutesInterface;

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private store: StoreService,
    private router: Router
  ) {
    this.model = this.formBuilder.group({
      old_password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ],
      ],
      new_password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ],
      ],
      password_confirmation: ['', [Validators.required]],
    });
    this.routes = SiteSettings.routes;
  }

  ngOnInit(): void {}

  submit(): void {
    this.api
      .auth()
      .changePassword(this.model.value)
      .subscribe(
        async (response: any) => {
          this.store.auth.login(response);
          await this.router.navigateByUrl(this.routes.home);
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }
}
