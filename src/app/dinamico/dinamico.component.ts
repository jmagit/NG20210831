import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Formulario', componente: FormularioComponent, icono: 'fas fa-user-tie'},
    { texto: 'Inicio', componente: HomeComponent, icono: 'fas fa-home'},
    { texto: 'Demos', componente: DemosComponent, icono: 'fas fa-chalkboard-teacher'},
    { texto: 'Calculadora', componente: CalculadoraComponent, icono: 'fas fa-calculator'},
  ];
  actual = this.menu[0].componente;

  constructor() { }

  ngOnInit(): void {
  }

  selecciona(index: number): void {
    this.actual = this.menu[index].componente;
  }

}
