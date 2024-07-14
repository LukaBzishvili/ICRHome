import { Component } from '@angular/core';
import { FilterComponentComponent } from '../../components/filter-component/filter-component.component';
import { CatalogProductsComponent } from '../../components/catalog-products/catalog-products.component';
import { ListCarouselComponent } from '../../components/list-carousel/list-carousel.component';
import { list } from '../../Data/Utils';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    FilterComponentComponent,
    CatalogProductsComponent,
    ListCarouselComponent,
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  list = list;
}
