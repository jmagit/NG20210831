import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/my-core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main';
import { SecurityModule } from './security';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DemosComponent } from './demos/demos.component';
import { CommonServicesModule } from './common-services';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    CommonServicesModule, MainModule, SecurityModule, MyCoreModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
