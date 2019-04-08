import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material/material.module'
import { NgModule } from '@angular/core';

import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  exports: [
    MainNavComponent,
    MaterialModule
  ]
})
export class CoreModule { }
