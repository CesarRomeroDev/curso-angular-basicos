import { Component, Input} from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajes: personaje[] = [];

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }


//.trim() para borrar espacios en blanco
//.length para ver la cantidad de caracteres que tiene 
  agregar(){
    if ( this.nuevo.nombre.trim().length == 0 ) {    //agregamos nuestra nueva funcion que viene de main.page.component.html. mostrar valores en consola
    return;
  }
  console.log(this.nuevo);   //mostrar valores en consola

  this.personajes.push( this.nuevo );
  this.nuevo = {
    nombre: '',
    poder: 0
  }
}

}
