import { Component, OnInit } from '@angular/core';
import { Heros } from '../heros';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  tableauHeros: Heros[] = HEROS ;
  constructor() { }

  ngOnInit(): void {
  }

}
