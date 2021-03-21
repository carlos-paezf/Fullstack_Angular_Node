import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente01Component } from './componente01/componente01.component';
import { CompHolaComponent } from './comp-hola/comp-hola.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    CompHolaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
