import { Component, Input, Output, EventEmitter} from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  //@Input() personajes: personaje[] = [];

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private DbzService: DbzService) {}

  //@Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();


//.trim() para borrar espacios en blanco
//.length para ver la cantidad de caracteres que tiene 
  agregar(){
    if ( this.nuevo.nombre.trim().length == 0 ) {    //agregamos nuestra nueva funcion que viene de main.page.component.html. mostrar valores en consola
    return;
  }

  this.DbzService.agregarPersonaje( this.nuevo );
  //console.log(this.nuevo);   //mostrar valores en consola
  //this.onNuevoPersonaje.emit(this.nuevo);

  //this.personajes.push( this.nuevo );
  this.nuevo = {
    nombre: '',
    poder: 0
  }
}

}
