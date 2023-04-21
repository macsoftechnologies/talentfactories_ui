import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-dashboard',
  templateUrl: './professional-dashboard.component.html',
  styleUrls: ['./professional-dashboard.component.scss'],
})
export class ProfessionalDashboardComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl(`/Sign-In`);
  }
}
