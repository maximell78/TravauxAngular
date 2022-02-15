import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { TableProduitsComponent } from './table-produits/table-produits.component';

const routes: Routes = [
  { path: 'liste-produits', component: ListeProduitsComponent },
  { path: 'tableau-produits', component: TableProduitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
