import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from './produit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produitsUrl = 'http://localhost/exemple-api-produits-main/api/';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitsUrl);
  }
}
