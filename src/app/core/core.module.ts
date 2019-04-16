import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
// modules
import { SharedModule } from '../shared/shared.module';
import { AvatarModule } from 'ngx-avatar';
// componets 
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    FooterComponent,
    MainNavComponent,
    MenuItemsComponent,
    UserCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    AvatarModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
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
