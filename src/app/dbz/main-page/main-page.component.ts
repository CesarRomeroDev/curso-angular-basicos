import { Component, OnInit } from '@angular/core';

import { personaje } from '../interfaces/dbz.interface';


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
    nombre: "Maestro Roshi",
    poder: 1000
  }

}
