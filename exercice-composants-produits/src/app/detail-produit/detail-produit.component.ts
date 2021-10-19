import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  @Input() nom:String = '';
  @Input() description:String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
