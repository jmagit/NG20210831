import { Component, OnInit } from '@angular/core';

class Persona {
  id: number | null = null;
  nombre: string = '';
  apellidos: string | null = null;
  edad: number | null = null;
  nif: string | null = null;
  correo:  string | null = null;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento: Persona = new Persona();
  isAdd = true;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.elemento =  new Persona();
    this.isAdd = true;
  }

  load() {
    this.elemento =  { id: 1, nombre: 'Pepitooooooooooo', apellidos: 'Grillo', edad: 99, nif: '12345678Z', correo: 'pepito@grillo' }
    this.isAdd = false;
  }

  send() {
    window.alert(JSON.stringify(this.elemento))
  }
}
