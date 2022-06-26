import { Component } from '@angular/core';
import { ConfirmService } from 'src/app/services/confirm.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
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
