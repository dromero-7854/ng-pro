import { NgModule } from '@angular/core';
// modules
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgBootstrapModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NgBootstrapModule
  ]
})
export class SharedModule { }
