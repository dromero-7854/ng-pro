import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// modules
import { CoreModule } from './core/core.module';
// components
import { AppComponent } from './app.component';
// routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
