import { Component, OnInit } from '@angular/core';

interface personaje {    //agregamos la interface de nuestro objeto (nuevo)
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  personajes: personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    },
  ];


  nuevo: personaje = {
    nombre: '',
    poder: 0
  }


//.trim() para borrar espacios en blanco
//.length para ver la cantidad de caracteres que tiene 
  agregar(){
  //   if ( this.nuevo.nombre.trim().length == 0 ) {    //agregamos nuestra nueva funcion que viene de main.page.component.html.
  //   return;
  // }
  // console.log(this.nuevo);

  this.personajes.push( this.nuevo );
  this.nuevo = {
    nombre: '',
    poder: 0
  }
}

}
