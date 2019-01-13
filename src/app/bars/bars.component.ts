import { Component, OnInit } from '@angular/core';
import { Bar } from '../common/interfaces/bar';
import { BarService } from '../bar-service/bar.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {
  bars: Bar [];

  constructor(private barService: BarService) { }

  ngOnInit() {
    this.getBars();
  }

  getBars(): void {
    this.barService.getAllBars()
        .subscribe((bars: Bar []) => this.bars = bars);
  }

}
