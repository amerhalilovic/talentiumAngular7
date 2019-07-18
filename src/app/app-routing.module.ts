import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatistikaComponent} from './statistika/statistika.component';
import {GodineComponent} from './godine/godine.component';
import {UpustvaComponent} from './upustva/upustva.component';
import {KontaktComponent}from './kontakt/kontakt.component';
const routes: Routes = [
  {
    path:'',
    component:GodineComponent
  },
  {
    path:'kategorije',
    component:StatistikaComponent
  },
  {
    path:'upustva',
    component:UpustvaComponent
  },
  {
    path:'kontakt',
    component:KontaktComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
