import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() showSubtitle: boolean = false;

  getImageUrl(image: any): string {
    if (image?.url) {
      return image.url;
    }
    return 'assets/images/logo.png';
  }
}
