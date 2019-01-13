import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Bar } from './bar';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) {}

  getAllBars(): Observable<Bar[]> {
    return this.http.get<Bar[]>('http://localhost:64001/barinfo');
  }
}
