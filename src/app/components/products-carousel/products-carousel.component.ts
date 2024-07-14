import { CommonModule, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-products-carousel',
  standalone: true,
  imports: [
    CarouselModule,
    NgForOf,
    ProductCardComponent,
    CommonModule,
    SlickCarouselModule,
  ],
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css'],
})
export class ProductsCarouselComponent implements OnInit {
  @Input() title!: string;
  @Input() arrow1!: string;
  @Input() arrow2!: string;
  @Input() furnitureData: Array<{
    title: string;
    image: string;
    category: string;
    price: number;
    isOnSale: boolean;
  }> = [];

  slideConfig: any;

  ngOnInit() {
    this.slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: true,
      infinite: true,
      prevArrow: `.custom-prev-arrow.${this.arrow1}`,
      nextArrow: `.custom-next-arrow.${this.arrow2}`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
  }
}
