import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ListCarouselComponent } from './components/list-carousel/list-carousel.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { categories } from './Data/Utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    CommonModule,
    CarouselComponent,
    CompanyListComponent,
    ListCarouselComponent,
    ProductsCarouselComponent,
    CollectionsComponent,
    BlogsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-home-angular';
  categories = categories;
}
