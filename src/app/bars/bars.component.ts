import { Component, OnInit } from '@angular/core';
import { Bar } from '../common/interfaces/bar';
import { BarService } from '../bar-service/bar.service';
import { map } from 'lodash';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  bars: Bar [];
  barNames: string [];

  constructor(private barService: BarService) { }

  ngOnInit() {
    this.getBars();
  }

  getBars(): void {
    this.barService.getAllBars()
        .subscribe((bars: Bar []) => {
          this.bars = bars;
          this.barNames = map(this.bars, (bar: Bar) => bar.name);
        });
  }

  search(barName: string) {
    alert(barName);
  }

}
