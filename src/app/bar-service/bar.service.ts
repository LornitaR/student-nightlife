import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Bar, BarServiceResponse, BarDBObject } from '../common/interfaces/bar';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) {}

  getAllBars(): Observable<Bar[]> {
    return this.http.get<BarServiceResponse>('http://localhost:64001/barinfo')
      .pipe(map((response: BarServiceResponse) => {
        return _.map(response.bars, (bar: BarDBObject) => ({ name: bar.bar_name }));
      }));
  }
}
