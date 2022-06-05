import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RezervuarasComponent } from './componentas/rezervuaras/rezervuaras.component';

@NgModule({
  declarations: [
    AppComponent,
    RezervuarasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
