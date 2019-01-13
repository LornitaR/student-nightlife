import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Bar, BarServiceResponse } from '../common/interfaces/bar';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) {}

  getAllBars(): Observable<Bar[]> {
    return this.http.get<BarServiceResponse>('http://localhost:64001/barinfo')
      .pipe(map((response: BarServiceResponse) => response.bars));
  }
}
