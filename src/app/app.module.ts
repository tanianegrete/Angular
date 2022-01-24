import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//importar http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';
import { VistaComponent } from './pages/vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
    // FormularioDiscoComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
