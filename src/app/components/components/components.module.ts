import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@App/components/components/card/card.module';
import { ListModule } from '@App/components/components/list/list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CardModule, ListModule],
})
export class ComponentsModule {}
