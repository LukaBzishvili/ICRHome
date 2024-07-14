import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { CatalogComponent } from './views/catalog/catalog.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
];
