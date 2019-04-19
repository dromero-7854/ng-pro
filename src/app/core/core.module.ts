import { NgModule, Optional, SkipSelf } from '@angular/core';
// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AvatarModule } from 'ngx-avatar';
// componets 
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { UserCardComponent } from './components/user-card/user-card.component';

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
    TranslateModule,
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
