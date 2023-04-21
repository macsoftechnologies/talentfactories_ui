import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl(`/Sign-In`);
  }
}
