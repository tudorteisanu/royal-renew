import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from './btn/btn.component';
import { SpacerComponent } from 'src/app/components/form-components/divider/spacer.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [FormInputComponent, BtnComponent, SpacerComponent],
  declarations: [FormInputComponent, BtnComponent, SpacerComponent],
})
export class FormComponentsModule {}
