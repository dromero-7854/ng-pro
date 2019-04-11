import { NgModule } from '@angular/core';
// modules
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
