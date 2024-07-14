import { Component, Input } from '@angular/core';
import { HamburgerMenuComponent } from '../../components/hamburger-menu/hamburger-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

export interface CategoryTitles {
  category: string;
  titles: Array<{ title: string }>;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HamburgerMenuComponent, MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() categories: Array<{
    category: string;
    titles: Array<{ title: string }>;
  }> = [];
}
