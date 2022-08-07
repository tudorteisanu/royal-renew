import { EventEmitter, Injectable } from '@angular/core';
import { ConfirmDialogOptions } from 'src/app/ts/interfaces/confirm';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  confirmEvent: EventEmitter<Partial<ConfirmDialogOptions>> = new EventEmitter<
    Partial<ConfirmDialogOptions>
  >();

  openConfirm(options: Partial<ConfirmDialogOptions> = {}): void {
    this.confirmEvent.next(options);
  }
}
