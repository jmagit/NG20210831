import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { NotificationService, NotificationType } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable | undefined;

  private nombre: string = 'Mundo'
  public listado = [
    { id: 1, nombre: 'Madrid'},
    { id: 2, nombre: 'BARCELONA'},
    { id: 3, nombre: 'pamplona'},
    { id: 4, nombre: 'a Coruña'},
  ]
  idProvincia = 2;

  resultado: string = '';
  visible = true;
  estetica = { importente: true, error: false, urgente: true };
  fontSize = 24;

  constructor(public vm: NotificationService) { }

  public get Nombre(): string { return this.nombre; }
  public set Nombre(value: string) {
    if(this.nombre === value) return;
    this.nombre = value;
  }

  public saluda(): void {
    this.resultado = `Hola ${this.Nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.Nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importente = !this.estetica.importente;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string) {
    const id = this.listado.length === 0 ? 1 : (this.listado[this.listado.length + 1].id + 1);
    this.listado.push({id, nombre: provincia});
    this.idProvincia = id;
  }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      if (n.Type !== NotificationType.error) { return; }
      window.alert(`Suscripcion: ${n.Message}`);
      this.vm.remove(this.vm.Listado.length - 1);
    });
  }

  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }

}
