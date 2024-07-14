import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { filterItems } from '../../Data/Utils';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-component',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.css',
})
export class FilterComponentComponent {
  faPlus = faPlus;

  filterItems = filterItems;

  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  //Called after constructor and also when all inputs are filled inside HTML
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.updateFiltersFromQueryParams(params);
    });
  }

  //Adding checked options inside page URL
  updateFiltersFromQueryParams(params: any): void {
    for (const item of this.filterItems) {
      for (const option of item.options) {
        option.checked = params[option.label] === 'true';
      }
    }
  }

  //Removing unchecked options from page URL
  onCheckboxChange(): void {
    const queryParams: any = {};

    for (const item of this.filterItems) {
      for (const option of item.options) {
        queryParams[option.label] = option.checked ? 'true' : null;
      }
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
