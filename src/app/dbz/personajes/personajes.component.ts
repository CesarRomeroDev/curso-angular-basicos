import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

  @Input() personajes: personaje[] = [];  //decorado de una propiedad: le decimos a Angular este @Input de personajes van a venir desde el componente padre 


}
