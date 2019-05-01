import { NgModule } from '@angular/core';
// modules
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // modules
    CommonModule,
    MaterialModule,
    NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    // components
    BreadcrumbComponent
  ]
})
export class SharedModule { }
