import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarsComponent } from './bars/bars.component';
import { BarComponent } from './bar/bar.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'bars',
        pathMatch: 'full'
    },
    {
        path: 'bars',
        component: BarsComponent
    },
    {
        path: 'bars/:barId/drinkinfo',
        component: BarComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
