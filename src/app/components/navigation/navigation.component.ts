import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  @Input() categories: Array<{
    category: string;
    titles: Array<{ title: string }>;
  }> = [];

  constructor(private router: Router) {}

  navigateToCatalog(category: string): void {
    this.router.navigate(['/catalog'], { queryParams: { category } });
  }

  getTitles(): string[] {
    return this.categories
      .map((category) => category.titles.map((title) => title.title))
      .flat();
  }
}
