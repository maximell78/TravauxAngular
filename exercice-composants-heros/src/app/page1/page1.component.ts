import { Component, OnInit } from '@angular/core';
import { Heros } from '../heros';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  tableauHeros: Heros[] = HEROS ;
  constructor() { }

  ngOnInit(): void {
  } 

}