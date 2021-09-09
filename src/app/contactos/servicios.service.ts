import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from 'src/my-core';
import { RESTDAOService } from '../base-code/RESTDAOService.class';
import { ModoCRUD } from '../base-code/tipos';
import { NotificationService } from '../common-services';
import { AUTH_REQUIRED } from '../security';

export class Contactos {
  id: number = 0;
  tratamiento: string | null = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  telefono: string | null = null;
  email: string | null = null;
  sexo: string | null = null;
  nacimiento: string | null = null;
  avatar: string | null = null;
  conflictivo: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class ContactosDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'contactos', { withCredentials: true });
//    super(http, 'contactos', { context: new HttpContext().set(AUTH_REQUIRED, true) });
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContactosViewModelService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected listURL = '/contactos';

  constructor(protected notify: NotificationService,
    protected out: LoggerService,
    protected dao: ContactosDAOService, protected router: Router) { }

  public get Modo(): ModoCRUD { return this.modo; }
  public get Listado(): Array<any> { return this.listado; }
  public get Elemento(): any { return this.elemento; }

  public list(): void {
    this.dao.query().subscribe(
      data => {
        this.listado = data;
        this.modo = 'list';
      },
      err => this.notify.add(err.message)
    );
  }

  public add(): void {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any): void {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      err => this.notify.add(err.message)
    );
  }
  public view(key: any): void {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.modo = 'view';
      },
      err => this.notify.add(err.message)
    );
  }
  public delete(key: any): void {
    if (!window.confirm('¿Seguro?')) { return; }

    this.dao.remove(key).subscribe(
      data => this.list(),
      err => this.notify.add(err.message)
    );
  }

  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
    // this.router.navigateByUrl(this.listURL);
  }

  public send(): void {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'edit':
        this.dao.change(this.idOriginal, this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'view':
        this.cancel();
        break;
    }
  }

  clear() {
    this.elemento = {};
    this.idOriginal = null;
    this.listado = [];
  }

}
