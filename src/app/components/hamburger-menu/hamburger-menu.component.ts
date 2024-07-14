import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent {
  @Input() categories: Array<{
    category: string;
    titles: Array<{ title: string }>;
  }> = [];

  isActive = false;
  activeCategory: any = null;

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  setActiveUl(category: any) {
    this.activeCategory = this.activeCategory === category ? null : category;
  }
}
