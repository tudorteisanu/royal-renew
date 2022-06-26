import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/components/components/card/card.module';
import { ListModule } from 'src/app/components/components/list/list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CardModule, ListModule],
})
export class ComponentsModule {}
