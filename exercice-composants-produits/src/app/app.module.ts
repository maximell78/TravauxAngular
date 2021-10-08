import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { ImageComponent } from './image/image.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { PrixComponent } from './prix/prix.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ListeProduitsComponent,
    FicheProduitComponent,
    ImageComponent,
    DetailProduitComponent,
    PrixComponent,
    PiedDePageComponent,
    LienDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
