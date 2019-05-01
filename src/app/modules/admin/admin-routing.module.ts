import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { NewScoringComponent } from './pages/new-scoring/new-scoring.component';

const routes: Routes = [
  {
    path: 'user-admin',
    component: UserAdminComponent
  },
  {
    path: 'new-scoring',
    component: NewScoringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
