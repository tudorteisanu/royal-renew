import { Component, OnInit } from '@angular/core';
import { ApiService } from '@App/api/api.service';
import { AlertService } from '@App/services/alert.service';
import { RoleInterface } from '@App/modules/roles/interfaces';
import { ConfirmService } from '@App/services/confirm.service';
import { headerTrackBy } from '@App/mixins/headerMixin';
import { HeaderInterface } from '@App/interfaces/header';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
})
export class RolesListComponent implements OnInit {
  roles: RoleInterface[] = [];
  headerTrackBy: any;
  headers: HeaderInterface<RoleInterface>[] = [];

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private confirm: ConfirmService
  ) {
    this.headerTrackBy = headerTrackBy;
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.api
      .roles()
      .find()
      .subscribe(
        (data: {
          items: RoleInterface[];
          headers: HeaderInterface<RoleInterface>[];
        }) => {
          this.roles = data.items;
          this.headers = data.headers;
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }

  public create(): void {
    this.api
      .roles()
      .create({
        name: 'Admin',
        alias: 'admin',
      })
      .subscribe(
        () => {
          this.alert.showSuccess('Successful crated!');
          this.loadData();
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }

  private remove(id: number): void {
    this.api
      .roles()
      .remove(id)
      .subscribe(
        () => {
          this.alert.showSuccess('Successful deleted!');
          this.loadData();
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }

  public showConfirm(id: number): void {
    this.confirm.openConfirm({
      accept: () => {
        this.remove(id);
      },
    });
  }

  roleTrackBy(index: number, role: RoleInterface): number {
    return role.id;
  }

  get headerStyles(): object {
    return {
      'grid-template-columns': `repeat(${this.headers.length + 1}, 1fr)`,
    };
  }
}
