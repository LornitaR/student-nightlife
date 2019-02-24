import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, includes } from 'lodash';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder: string;
  @Input() options: string [];
  @Output() selectOption: EventEmitter<string> = new EventEmitter<string>();
  filteredOptions: string [];
  searchBoxControl: FormControl;
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon('search', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/baseline-search.svg'));
    this.searchBoxControl = new FormControl();
    this.searchBoxControl.valueChanges.subscribe((value: string) => {
      console.log(value);
      this.filteredOptions = filter(this.options, (option: string) => includes(option, value));
    });
  }

  onOptionSelected(value: string) {
    this.selectOption.emit(value);
  }
}
