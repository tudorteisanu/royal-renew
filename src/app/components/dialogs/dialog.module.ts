import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [AlertComponent, ConfirmComponent],
  imports: [CommonModule],
  exports: [AlertComponent, ConfirmComponent],
})
export class DialogModule {}
