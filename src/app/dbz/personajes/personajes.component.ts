import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

  //@Input() personajes: personaje[] = [];  //decorado de una propiedad: le decimos a Angular este @Input de personajes van a venir desde el componente padre 
  
  
  get personajes() {
    return this.dbzModule.personajes;
  }
  


constructor( private dbzModule: DbzService) {
}

}
