import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('dataNuevo') nuevo: Personaje = {
    nombre: ''
  }

  constructor(private dbzService: DbzService) { };

  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    // this.nuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: ''
    }

  }


}