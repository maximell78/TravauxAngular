import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['../shared/shared-styles.css', './prix.component.css']
})
export class PrixComponent implements OnInit {
  titre = 'prix';
  @Input() prix:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
