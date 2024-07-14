import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { list } from '../../Data/Utils';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, ProductCardComponent],
  templateUrl: './list-carousel.component.html',
  styleUrls: ['./list-carousel.component.css'],
})
export class ListCarouselComponent {
  @Input() list: Array<{ name: string; image: string }> = [];

  constructor(private router: Router) {}

  navigateToCatalog(category: string): void {
    this.router.navigate(['/catalog'], { queryParams: { category } });
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    // prevArrow: '.custom-prev-arrow',
    // nextArrow: '.custom-next-arrow',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
}
