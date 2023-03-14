import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  // {
  //   path:'About-Us',
  //   component: AboutusComponent
  // }
  {
    path: 'Dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
