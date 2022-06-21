import { EventEmitter, Injectable } from '@angular/core';
import {
  AlertComponentInterface,
  AlertInterface,
  AlertType,
} from '@App/interfaces/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService implements AlertComponentInterface {
  public alertEvent: EventEmitter<AlertInterface> =
    new EventEmitter<AlertInterface>();

  public showError(message: string, withoutClosing = false): void {
    this.alertEvent.next({
      message,
      withoutClosing,
      title: 'Error!',
      type: AlertType.ERROR,
    });
  }

  public showInfo(message: string, withoutClosing = false): void {
    this.alertEvent.next({
      message,
      withoutClosing,
      title: 'Info!',
      type: AlertType.INFO,
    });
  }

  public showSuccess(message: string, withoutClosing = false): void {
    this.alertEvent.next({
      message,
      withoutClosing,
      title: 'Success!',
      type: AlertType.SUCCESS,
    });
  }

  public showWarning(message: string, withoutClosing = false): void {
    this.alertEvent.next({
      message,
      withoutClosing,
      title: 'Warning!',
      type: AlertType.WARNING,
    });
  }
}
