import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InstitutionDashboardComponent } from './institution-dashboard/institution-dashboard.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'About-Us',
    component: AboutusComponent,
  },
  {
    path: 'institution-dashboard',
    component: InstitutionDashboardComponent,
  },
  {
    path: 'professional-dashboard',
    component: ProfessionalDashboardComponent,
  },
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: 'employer-dashboard',
    component: EmployerDashboardComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'Sign-In',
    component: SigninComponent,
  },
  {
    path: 'Sign-Up',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
