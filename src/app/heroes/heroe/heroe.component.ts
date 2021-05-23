import { Component } from "@angular/core";


// Concepto one way data binding (Enlazado de una sola via).

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`; // En esta linea de codigo se estan concatenando las variables nombre y edad.
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}