import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {

  @Input() hero:String ='';
  constructor() { }

  ngOnInit(): void {
  }

}
