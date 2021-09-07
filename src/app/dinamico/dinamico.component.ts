import { Component, OnInit } from '@angular/core';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Inicio', componente: HomeComponent},
    { texto: 'Demos', componente: DemosComponent},
  ];
  actual = this.menu[0].componente;

  constructor() { }

  ngOnInit(): void {
  }

  selecciona(index: number): void {
    this.actual = this.menu[index].componente;
  }

}
