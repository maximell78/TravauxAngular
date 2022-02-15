import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-formulaire-produits',
  templateUrl: './formulaire-produits.component.html',
  styleUrls: ['./formulaire-produits.component.css']
})
export class FormulaireProduitsComponent implements OnInit {
  @Input() produit: Produit = {id:'', nom:'', description:'', prix:0}

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
  }

  onSave(produitForm: NgForm) {
    if (produitForm.valid) {
      if (this.produit.id != null && this.produit.id != '') {
        // Si on a un id, on doit modifier le produit
        this.produitService.editProduit(this.produit).subscribe(_ => { /* todo : mettre à jour le tableau */ });

      } else { 
        // Sinon, on doit ajouter le produit
        this.produitService.addProduit(this.produit).subscribe(_ => { /* todo : mettre à jour le tableau */});
      }
      }
      
  }


}
