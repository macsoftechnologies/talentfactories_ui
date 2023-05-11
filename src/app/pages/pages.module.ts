import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { InstitutionDashboardComponent } from './institution-dashboard/institution-dashboard.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobpostpageComponent } from './jobpostpage/jobpostpage.component';
import { JobdetailspageComponent } from './jobdetailspage/jobdetailspage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomepageComponent,
    AboutusComponent,
    AdminDashboardComponent,
    EmployerDashboardComponent,
    InstitutionDashboardComponent,
    ProfessionalDashboardComponent,
    SigninComponent,
    SignupComponent,
    StudentDashboardComponent,
    HeaderComponent,
    FooterComponent,
    JobpostpageComponent,
    JobdetailspageComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PagesModule {}
