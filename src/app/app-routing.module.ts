import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatistikaComponent} from './statistika/statistika.component';
import {GodineComponent} from './godine/godine.component';
const routes: Routes = [
  {
    path:'',
    component:GodineComponent
  },
  {
    path:'statistika',
    component:StatistikaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
