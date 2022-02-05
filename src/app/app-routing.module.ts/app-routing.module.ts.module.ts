import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from '../componentesdelcurri/encabezado/encabezado.component';
import { PortadaComponent } from '../componentesdelcurri/portada/portada.component';
import { Error404Component } from '../componentesdelcurri/error404/error404.component';

const routes: Routes = [
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'portada', component:PortadaComponent},
  {path: '**', component: Error404Component}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModuleTsModule { }
