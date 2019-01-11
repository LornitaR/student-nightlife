import { Component, OnInit } from '@angular/core';
import {Drink} from '../drink'

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drink: Drink = {
    drink_id: 1,
    bar_id: 1,
    name: 'Rum',
    price: 7.50
  };

  constructor() { }

  ngOnInit() {
  }

}
