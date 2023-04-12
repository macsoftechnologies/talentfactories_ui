import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}
  ngOnInit() {}
  signupType(type: any) {
    localStorage.setItem('type', type);
    console.log('typeAdmin');
  }
}
