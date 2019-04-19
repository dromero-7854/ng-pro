import { NgModule } from '@angular/core';
// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
// components
import { ScoringAdminComponent } from './pages/scoring-admin/scoring-admin.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
// routing
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  providers: [],
  declarations: [
    ScoringAdminComponent,
    UserAdminComponent
  ]
})
export class AdminModule { }
