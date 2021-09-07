import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { HomeComponent } from './home/home.component';
import { AjaxWaitComponent } from './ajax-wait';
import { SecurityModule } from '../security';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotificationComponent,
    HomeComponent,
    AjaxWaitComponent,
  ],
  exports: [
    NotificationComponent,
    HomeComponent,
    AjaxWaitComponent,
  ],
  imports: [
    CommonModule, SecurityModule, RouterModule.forChild([]),
  ]
})
export class MainModule {
  constructor(@Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
