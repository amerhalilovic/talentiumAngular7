import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistikaComponent } from './statistika/statistika.component';
import { GodineComponent } from './godine/godine.component';
import { UpustvaComponent } from './upustva/upustva.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KnjigeComponent } from './knjige/knjige.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistikaComponent,
    GodineComponent,
    UpustvaComponent,
    KontaktComponent,
    KnjigeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
