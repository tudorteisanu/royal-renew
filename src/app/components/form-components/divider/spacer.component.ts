import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'spacer',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
  styles: [
    `
      spacer {
        display: inline-block;
        margin-left: auto;
      }
    `,
  ],
})
export class SpacerComponent {}
