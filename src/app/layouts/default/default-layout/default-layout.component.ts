import { Component } from '@angular/core';
import { AlertService } from '@App/services/alert.service';
import { ConfirmService } from '@App/services/confirm.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  constructor(private confirmService: ConfirmService) {}

  showConfirm(): void {
    this.confirmService.openConfirm({
      accept: () => {
        this.confirmSuccess();
      },
      closeOnBackgroundClick: true,
    });
  }

  confirmSuccess(): void {
    console.log('confirmed');
  }
}
