import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';


@Component({
  selector: 'app-table-produits',
  templateUrl: './table-produits.component.html',
  styleUrls: ['./table-produits.component.css']
})
export class TableProduitsComponent implements OnInit {
  produits: Produit[] = [];
  newProduit: Produit[] = [];
  columnsToDisplay = ['nom', 'prix', 'actions'];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.newProduit.nom='';
    this.getProduits();
  }
  
  getProduits(): void {
    this.produitService.getProduits()
      .subscribe(resultat => this.produits = resultat);
  }

  OnSelect(produit: Produit): void {
    this.selectedProduit = produit;
  }

  onAdd(tableHeros: MatTable<Produit>, produitFormAjout: NgForm) {
    if(produitFormAjout.valid) {
      this.ProduitService.addProduit(this.newProduit)
          .subscribe(produit  => { this.produits.push(produit); produitFormAjout.resetForm(); tableProduits.renderRows();});
    }
  }

  updateProduit(produit: Produit): Observable<any> {
    const id = produit._id;
    return this.http.put<Produit>(this.produitssUrl + 'hero/' + id, produit, httpOptions);
}

  onDelete(produit: Produit): void {
    this.produitService.deleteProduit(produit.id)
      .subscribe(result => this.produits = this.produits.filter(p => p !== produit));
  }
}
