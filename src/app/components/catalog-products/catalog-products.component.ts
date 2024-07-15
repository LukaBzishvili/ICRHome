import { Component } from '@angular/core';
import { furnitureData } from '../../Data/Utils';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';

interface Furniture {
  image: string;
  title: string;
  category: string;
  price: number;
  isOnSale: boolean;
}

@Component({
  selector: 'app-catalog-products',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './catalog-products.component.html',
  styleUrl: './catalog-products.component.css',
})
export class CatalogProductsComponent {
  products: Furniture[] = [];
  category: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      this.filterProductsByCategory();
    });
  }

  filterProductsByCategory(): void {
    if (this.category) {
      this.products = furnitureData.filter(
        (product) => product.category === this.category
      );
    } else {
      this.products = furnitureData;
    }
  }
}
