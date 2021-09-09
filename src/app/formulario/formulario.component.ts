import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RESTDAOService } from '../base-code/RESTDAOService.class';
import { NotificationService, NotificationType } from '../common-services';

class Persona {
  id: number | null = null;
  nombre: string = '';
  apellidos: string | null = null;
  edad: number | null = null;
  nif: string | null = null;
  correo: string | null = null;
}

import { Injectable } from '@angular/core';
import { AUTH_REQUIRED } from '../security';

@Injectable({ providedIn: 'root' })
class PersonasDAOService extends RESTDAOService<Persona, number> {
  constructor(http: HttpClient) {
    super(http, 'personas', { context: new HttpContext().set(AUTH_REQUIRED, true) })
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento: Persona = new Persona();
  isAdd = true;

  constructor(private notify: NotificationService, private dao: PersonasDAOService) { }

  ngOnInit(): void {
  }

  add() {
    this.elemento = new Persona();
    this.isAdd = true;
  }

  load() {
    if (this.elemento.id != null)
      this.dao.get(this.elemento.id).subscribe(
        datos => {
          this.elemento = datos;
          this.isAdd = false;
        },
        err => this.notify.add(err.message)
      )
    // this.elemento =  { id: 1, nombre: 'Pepitooooooooooo', apellidos: 'Grillo', edad: 99, nif: '12345678Z', correo: 'pepito@grillo' }
    // this.isAdd = false;
  }

  send() {
    if (this.isAdd)
      this.dao.add(this.elemento).subscribe(
        data => this.notify.add('OK', NotificationType.warn),
        err => this.notify.add(err.message)
      )
    else
      if (this.elemento.id)
        this.dao.change(this.elemento.id, this.elemento).subscribe(
          data => this.notify.add('OK', NotificationType.warn),
          err => this.notify.add(err.message)
        )

    // window.alert(JSON.stringify(this.elemento))
  }
}
