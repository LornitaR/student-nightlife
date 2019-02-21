import { Component, OnInit, Input } from '@angular/core';
import { Listable } from '../interfaces/listable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() items: Listable[];

  constructor() { }

  ngOnInit() {
  }

}
