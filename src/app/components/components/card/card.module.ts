import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSubtitleComponent } from 'src/app/components/components/card/partials/card-subtitle/card-subtitle.component';
import { CardTextComponent } from 'src/app/components/components/card/partials/card-text/card-text.component';
import { CardActionsComponent } from 'src/app/components/components/card/partials/card-actions/card-actions.component';
import { CardTitleComponent } from 'src/app/components/components/card/partials/card-title/card-title.component';
import { CardComponent } from 'src/app/components/components/card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardTextComponent,
    CardActionsComponent,
    CardSubtitleComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardTextComponent,
    CardActionsComponent,
    CardSubtitleComponent,
  ],
})
export class CardModule {}
