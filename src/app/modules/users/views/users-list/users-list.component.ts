import { Component, OnInit } from '@angular/core';
import { ApiService } from '@App/api/api.service';
import { UserInterface } from '@App/modules/users/interfaces';
import { AlertService } from '@App/services/alert.service';
import { ConfirmService } from '@App/services/confirm.service';
import { HeaderInterface } from '@App/interfaces/header';
import { headerTrackBy } from '@App/mixins/headerMixin';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: UserInterface[] = [];
  public headers: HeaderInterface<UserInterface>[] = [
    {
      value: 'id',
      text: 'ID',
    },
    {
      value: 'firstname',
      text: 'First name',
    },
    {
      value: 'lastname',
      text: 'Last name',
    },
    {
      value: 'email',
      text: 'Email',
    },
  ];
  headersTrackBy;

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private confirm: ConfirmService
  ) {
    this.headersTrackBy = headerTrackBy;
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.api
      .users()
      .find()
      .subscribe(
        (data: {
          items: UserInterface[];
          headers: HeaderInterface<UserInterface>[];
        }) => {
          this.users = data.items;
          this.headers = data.headers;
        },
        (e) => {
          this.alert.showError(e?.message);
        }
      );
  }

  public create(): void {
    this.api
      .users()
      .create({
        firstname: 'Mike',
        lastname: 'Tyson',
        email: 'test@mail.ru',
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

  public remove(id: number): void {
    this.api
      .users()
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

  userTrackBy(index: number, user: UserInterface): number {
    return user.id;
  }
}
