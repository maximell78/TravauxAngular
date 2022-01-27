import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ImageComponent } from './image/image.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { PrixComponent } from './prix/prix.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    ListeProduitsComponent,
    ImageComponent,
    NomDescriptionComponent,
    PrixComponent,
    LienDetailsComponent,
    FicheProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
