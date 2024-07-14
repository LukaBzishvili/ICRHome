import { Component } from '@angular/core';
import { furnitureData } from '../../Data/Utils';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-catalog-products',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './catalog-products.component.html',
  styleUrl: './catalog-products.component.css',
})
export class CatalogProductsComponent {
  FurnitureData = furnitureData;
}
