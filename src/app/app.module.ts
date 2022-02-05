import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentesdelcurri/encabezado/encabezado.component';
import { PortadaComponent } from './componentesdelcurri/portada/portada.component';
import { AcercadeComponent } from './componentesdelcurri/acercade/acercade.component';
import { ExperienciayeducacionComponent } from './componentesdelcurri/experienciayeducacion/experienciayeducacion.component';
import { HabilidadesComponent } from './componentesdelcurri/habilidades/habilidades.component';
import { ProyectosComponent } from './componentesdelcurri/proyectos/proyectos.component';
import { Error404Component } from './componentesdelcurri/error404/error404.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
 
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModuleTsModule
  ], 
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PortadaComponent,
    AcercadeComponent,
    ExperienciayeducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    Error404Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class 
AppModule {}
