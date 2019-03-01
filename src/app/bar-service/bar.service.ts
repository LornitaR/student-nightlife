import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Bar, BarResponse, BarsResponse, BarDBObject } from '../common/interfaces/bar';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) {}

  getBar(barId: number): Observable<Bar> {
    return this.http.get<BarResponse>(`http://localhost:64001/bars/${barId}`)
      .pipe(map((response: BarResponse) => {
        return this.convertToBar(response.bar);
      }));
  }

  getAllBars(): Observable<Bar[]> {
    return this.http.get<BarsResponse>('http://localhost:64001/barinfo')
      .pipe(map((response: BarsResponse) => {
        return _.map(response.bars, (bar: BarDBObject) => ({ name: bar.bar_name }));
      }));
  }

  convertToBar(barDBObject: BarDBObject): Bar {
    return {
      id: barDBObject.bar_id,
      name: barDBObject.bar_name,
      description: barDBObject.description
    };
  }
}
