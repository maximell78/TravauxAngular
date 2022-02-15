import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['../shared/shared-styles.css', './fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  titre = 'Fiche produit';
  @Input() produit?:Produit;

  constructor() { }

  ngOnInit(): void {
  }

}
