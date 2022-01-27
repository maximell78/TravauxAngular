import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['../shared/shared-styles.css', './liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produits: Produit [] = [];
  
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void {
    this.produitService.getProduits()
      .subscribe(resultat => this.produits = resultat);
  }

}
