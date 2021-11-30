import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './produit';

@Pipe({
  name: 'qtePositive'
})
export class QtePositivePipe implements PipeTransform {

  transform(produits: Produit[]): Produit[] {
    return produits.filter(produit => produit.qte > 0);
  }

}
