import { Component, OnInit } from '@angular/core';
import { Drink } from '../common/interfaces/drink';
import { DrinkService } from '../drink-service/drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks: Drink [];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(): void {
    this.drinkService.getAllDrinks()
        .subscribe((drinks: Drink []) => this.drinks = drinks);
  }
}
