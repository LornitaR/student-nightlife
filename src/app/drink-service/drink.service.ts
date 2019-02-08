import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Drink, DrinkServiceResponse, DrinkDBObject } from '../common/interfaces/drink';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {}

  getAllDrinks(): Observable<Drink[]> {
    return this.http.get<DrinkServiceResponse>('http://localhost:64001/drinkinfo')
      .pipe(map((response: DrinkServiceResponse) => {
        return _.map(response.drinks, (drink: DrinkDBObject) => ({ name: drink.drink_name }));
      }));
  }
}
