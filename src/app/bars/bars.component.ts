import { Component, OnInit } from '@angular/core';
import { Bar } from '../bar';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {
  bar: Bar = {
    id: 1,
    name: 'Icon'
  };

  constructor() { }

  ngOnInit() {
  }

}
