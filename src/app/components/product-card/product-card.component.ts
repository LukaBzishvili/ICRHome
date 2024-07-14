import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input()
  productName!: string;
  @Input()
  productType!: string;
  @Input()
  productPrice!: string;
  @Input() productImage!: string;
  @Input() isOnSale!: boolean;
}
