import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  monProduit1: Produit = {
    id: '1',
    nom: 'CPU',
    description: 'Bacon surlonge porc flan lorem ipsum farlala',
    prix: 300
}

monProduit2: Produit = {
    id: '2',
    nom: 'Carte mère',
    description: "Quand j'ai un creux j'aime la ratatouille",
    prix: 10
}
  constructor() { }

  ngOnInit(): void {
  }

}
