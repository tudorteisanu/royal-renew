import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemContentComponent } from './partials/list-item-content/list-item-content.component';
import { ListItemTitleComponent } from './partials/list-item-title/list-item-title.component';
import { ListItemComponent } from '@App/components/components/list/partials/list-item/list-item.component';
import { ListComponent } from '@App/components/components/list/list.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ListItemContentComponent,
    ListItemTitleComponent,
  ],
  imports: [CommonModule],
  exports: [
    ListComponent,
    ListItemComponent,
    ListItemContentComponent,
    ListItemTitleComponent,
  ],
})
export class ListModule {}
