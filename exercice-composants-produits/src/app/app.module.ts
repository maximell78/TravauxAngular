import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableauProduitsComponent } from './tableau-produits/tableau-produits.component';
import { QtePositivePipe } from './qte-positive.pipe';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';

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
    LienDetailsComponent,
    TableauProduitsComponent,
    QtePositivePipe,
    AjoutProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
