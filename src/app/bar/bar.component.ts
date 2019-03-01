import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink-service/drink.service';
import { Drink } from '../common/interfaces/drink';
import { Bar } from '../common/interfaces/bar';
import { BarService } from '../bar-service/bar.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  drinks: Drink [];
  bar: Bar;

  constructor(
    private drinkService: DrinkService,
    private barService: BarService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      ((params: ParamMap) =>
        this.getBar(+params.get('barId')))
    );
  }

  getBar(barId): void {
    this.barService.getBar(barId)
      .subscribe((bar: Bar) => {
        this.bar = bar;
        this.getDrinks();
      });
  }

  getDrinks(): void {
    this.drinkService.getDrinks(this.bar.id)
    .subscribe((drinks: Drink []) => {
      this.drinks = drinks;
    });
  }
}
