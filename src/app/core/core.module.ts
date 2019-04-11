import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
// modules
import { SharedModule } from '../shared/shared.module';
// componets 
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MainNavComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

}
