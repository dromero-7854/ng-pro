import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  exports: [
    MaterialModule,
    MainNavComponent
  ]
})
export class CoreModule { }
