
// Nuevo componente.

import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    
    <h1>{{title}}</h1> <!-- Las llaves dobles "{{}}" indican que es una propiedad de angular-->
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(base)">+ {{base}}</button><!--Los eventos son representados por parentesis "()"-->

    <span>{{numero}}</span>

    <button (click)="acumular(-base)">- {{base}}</button>
    
    `
})

export class ContadorComponent{
    title = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    
    acumular( valor: number){
      this.numero += valor;
    }
}