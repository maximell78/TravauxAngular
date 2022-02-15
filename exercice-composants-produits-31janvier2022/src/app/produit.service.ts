import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Produit } from './produit';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })  
};


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produitsUrl = 'http://localhost/exemple-api-produits/api/';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitsUrl);
  }

  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.produitsUrl, produit, httpOptions);
  }

  editProduit(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.produitsUrl + "?id=" + produit.id, produit, httpOptions);
  }

  deleteProduit(id: string): Observable<Produit> {
    return this.http.delete<Produit>(this.produitsUrl + "?id=" +  id);
  }


}
