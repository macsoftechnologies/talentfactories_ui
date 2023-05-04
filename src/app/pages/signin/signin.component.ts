import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signinForm: any;
  userType: any;
  hasError: boolean = true;

  constructor(private router: Router, private services: ServiceService) {
    this.signinForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.userType = localStorage.getItem('type');
  }

  signin() {
    console.log('newuser');
    if (this.signinForm.valid) {
      let userdetails = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
      };
      console.log(userdetails);
      if (this.userType == 'Institutions') {
        console.log('institutions');
        this.services.institutionSignIn(userdetails).subscribe((resp: any) => {
          console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            localStorage.setItem(
              'learningOrgId',
              resp.logindetails.learningOrgId
            );
            // console.log('Registered Successfully');
            this.signinForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Sign-In',
            });
            this.router.navigateByUrl('/institution-dashboard');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else if (this.userType == 'Professional') {
        console.log('Professional');
        this.services.professionalSignIn(userdetails).subscribe((resp: any) => {
          console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            localStorage.setItem(
              'professionalId',
              resp.logindetails.professionalId
            );

            // console.log('Registered Successfully');
            this.signinForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Sign-In',
            });
            this.router.navigateByUrl('/professional-dashboard');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else if (this.userType == 'Student') {
        console.log('Student');
        this.services.studentSignIn(userdetails).subscribe((resp: any) => {
          console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            localStorage.setItem('studentId', resp.logindetails.studentId);
            // console.log('Registered Successfully');
            this.signinForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Sign-In',
            });
            this.router.navigateByUrl('/student-dashboard');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else if (this.userType == 'Employer') {
        console.log('Employer');
        this.services.employerSignIn(userdetails).subscribe((resp: any) => {
          console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            localStorage.setItem(
              'organizationId',
              resp.logindetails.organizationId
            );
            // console.log('Registered Successfully');
            this.signinForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Successfully Sign-In',
            });
            this.router.navigateByUrl('/employer-dashboard');
          } else {
            console.log('error');
            Swal.fire({
              icon: 'error',
              text: 'Please Enter Values',
            });
          }
        });
      } else if (this.userType == 'Admin') {
        console.log('Admin');
        this.services.adminSignIn(userdetails).subscribe((resp: any) => {
          console.log(resp);
          if (resp.statusCode == 200 || resp.statusCode == 201) {
            // console.log('Sign-In Successfully');
            this.signinForm.reset();
            Swal.fire({
              icon: 'success',
              text: 'Admin Successfully Sign-In',
            });
            this.router.navigateByUrl('/admin-dashboard');
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
      console.log('AllError');
    }
  }
}
