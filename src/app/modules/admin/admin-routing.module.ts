import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { ScoringAdminComponent } from './pages/scoring-admin/scoring-admin.component';

const routes: Routes = [
  {
    path: 'user-admin',
    component: UserAdminComponent
  },
  {
    path: 'scoring-admin',
    component: ScoringAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
