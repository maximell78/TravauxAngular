import { Component, OnInit } from '@angular/core';
import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';


@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})

export class FicheProduitComponent implements OnInit {
  tableauProduits: Produit[] = PRODUITS;
  constructor() { }

  ngOnInit(): void {
  }

}
