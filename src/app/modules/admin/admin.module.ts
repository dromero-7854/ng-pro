import { NgModule } from '@angular/core';
// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
// components
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { NewScoringComponent } from './pages/new-scoring/new-scoring.component';
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
    UserAdminComponent,
    NewScoringComponent
  ]
})
export class AdminModule { }
