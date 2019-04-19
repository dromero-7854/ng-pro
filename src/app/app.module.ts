import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// modules
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from './core/core.module';
// components
import { AppComponent } from './app.component';
// routing
import { AppRoutingModule } from './app-routing.module';
// services
import { TranslationService } from './core/services/translate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TranslateModule.forRoot(),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private translate: TranslationService) {
    translate.init();
  }

}
