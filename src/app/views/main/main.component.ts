import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CompanyListComponent } from '../../components/company-list/company-list.component';
import { ListCarouselComponent } from '../../components/list-carousel/list-carousel.component';
import { ProductsCarouselComponent } from '../../components/products-carousel/products-carousel.component';
import { CollectionsComponent } from '../../components/collections/collections.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { categories, furnitureData, list } from '../../Data/Utils';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule,
    CarouselComponent,
    CompanyListComponent,
    ListCarouselComponent,
    ProductsCarouselComponent,
    CollectionsComponent,
    BlogsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  furnitureData = furnitureData;
  list = list;
  categories = categories;
  onSaleProducts = this.furnitureData.filter(
    (product) => product.isOnSale === true
  );
}
