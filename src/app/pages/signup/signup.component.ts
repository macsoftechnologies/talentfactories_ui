import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  SignupForm: any;
  hasError: boolean = true;
  userType: any;

  constructor(private router: Router, private services: ServiceService) {
    this.SignupForm = new FormGroup({
      Name: new FormControl(''),
      Email: new FormControl(''),
      PhNumber: new FormControl(''),
      Password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.userType = localStorage.getItem('type');
  }

  signup() {
    console.log('newuser');
    if (this.SignupForm.valid) {
      let userdetails = {
        name: this.SignupForm.value.Name,
        email: this.SignupForm.value.Email,
        // phNumber: this.SignupForm.value.PhNumber,
        password: this.SignupForm.value.Password,
      };
      console.log(userdetails);
      if (this.userType == 'Institutions') {
        // console.log('institutions');
        this.services.institutionSignUp(userdetails).subscribe((resp: any) => {
          // console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            // console.log('Institutions Registered Successfully');
            this.SignupForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Registered',
            });
            this.router.navigateByUrl('/Sign-In');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else if (this.userType == 'Professional') {
        // console.log('Professional');
        this.services.professionalSignUp(userdetails).subscribe((resp: any) => {
          // console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            // console.log('Registered Successfully');
            this.SignupForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Registered',
            });
            this.router.navigateByUrl('/Sign-In');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else if (this.userType == 'Student') {
        // console.log('Student');
        this.services.studentSingup(userdetails).subscribe((resp: any) => {
          // console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            // console.log('Registered Successfully');
            this.SignupForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Registered',
            });
            this.router.navigateByUrl('/Sign-In');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else if (this.userType == 'Employer') {
        // console.log('Employer');
        this.services.employerSignUp(userdetails).subscribe((resp: any) => {
          // console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            // console.log('Registered Successfully');
            this.SignupForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Registered',
            });
            this.router.navigateByUrl('/Sign-In');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else {
        console.log('user not defined');
      }
    } else {
      this.hasError = true;
      console.log('Error');
    }
  }
}
