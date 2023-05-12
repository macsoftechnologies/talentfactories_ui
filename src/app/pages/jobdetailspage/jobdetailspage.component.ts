import { Component } from '@angular/core';

@Component({
  selector: 'app-jobdetailspage',
  templateUrl: './jobdetailspage.component.html',
  styleUrls: ['./jobdetailspage.component.scss'],
})
export class JobdetailspageComponent {
  signupType(type: any) {
    localStorage.setItem('type', type);
    console.log('typeAdmin');
  }
}
