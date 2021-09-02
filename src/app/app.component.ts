import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/my-core';
import { NotificationService } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola MUNDO';

  // constructor(out: LoggerService) {
  //   out.error('Es un error');
  //   out.warn('Es un warn');
  //   out.info('Es un info');
  //   out.log('Es un log');
  // }

  constructor(private notify: NotificationService) {}
  ngOnInit(): void {
    this.notify.add('Esto sale del AppComponent')
  }


}
