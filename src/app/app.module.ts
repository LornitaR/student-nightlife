import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarsComponent } from './bars/bars.component';
import { DrinksComponent } from './drinks/drinks.component';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './common/list/list.component';
import { ListItemComponent } from './common/list-item/list-item.component';
import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    BarsComponent,
    DrinksComponent,
    UsersComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
