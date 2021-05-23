import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
/*
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';*/
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


// En el NgModule se declaran los nuevos componentes creados por el usuario.
@NgModule({
  declarations: [
    AppComponent, 
    //ContadorComponent, // Este componente fue hecho por el usuario y declarado en este modulo.
   // HeroeComponent, ListadoComponent
   
  ],
  // En este apartado van todos los modulos.
  imports: [ 
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], // En providers van los servicios.
  bootstrap: [AppComponent]
})
export class AppModule { }
