import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Output() backButton: EventEmitter<undefined> = new EventEmitter();
  @Output() menuButton: EventEmitter<undefined> = new EventEmitter();
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon('keyboard_backspace', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/back.svg'));
    this.iconRegistry.addSvgIcon('baseline-menu', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/baseline-menu.svg'));
  }

  onBackButtonClicked() {
    this.backButton.emit();
  }

  onMenuButtonClicked() {
    this.menuButton.emit();
  }

}
