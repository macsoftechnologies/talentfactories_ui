import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'About-Us',
    component: AboutusComponent
  },
  {
    path: 'Sign-In',
    component: SigninComponent
  },
  {
    path: 'Sign-Up',
    component: SignupComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then (m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
