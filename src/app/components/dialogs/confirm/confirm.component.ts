import { Component } from '@angular/core';
import { ConfirmService } from '@App/services/confirm.service';
import { ConfirmDialogOptions } from '@App/interfaces/confirm';
import { confirmAnimation } from '@App/components/dialogs/confirm/animations';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  animations: [confirmAnimation],
})
export class ConfirmComponent {
  public config: ConfirmDialogOptions = {
    title: '',
    text: 'Are you sure you want to confirm this?',
    successText: 'Yes',
    errorText: 'No',
    accept: () => {},
    reject: () => {},
    closeOnBackgroundClick: false,
  };
  public showConfirm: boolean = false;

  constructor(protected confirmService: ConfirmService) {
    confirmService.confirmEvent.subscribe((event: ConfirmDialogOptions) => {
      this.config = { ...this.config, ...event };
      this.showConfirm = true;
    });
  }

  public reject(): void {
    this.config.reject();
    this.hide();
  }

  public accept(): void {
    this.config.accept();
    this.hide();
  }

  private hide(): void {
    this.showConfirm = false;
  }

  public handleBackgroundClick(): void {
    if (this.config.closeOnBackgroundClick) {
      this.hide();
    }
  }
}
