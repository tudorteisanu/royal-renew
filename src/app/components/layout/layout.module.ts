import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [ContentComponent, SpinnerComponent],
  exports: [ContentComponent, SpinnerComponent],
  imports: [CommonModule],
})
export class LayoutModule {}
