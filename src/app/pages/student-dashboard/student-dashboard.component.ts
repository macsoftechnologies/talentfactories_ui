import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
declare const $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent {
  studentForm: any;
  getByStudentId: string | null | undefined;
  studentDetails: any;
  studentId: any;
  constructor(private router: Router, private services: ServiceService) {
    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phNumber: new FormControl('', [Validators.required]),
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getByStudentId = localStorage.getItem('studentId');
    this.getStudentById();
  }

  getStudentById() {
    let params = {
      studentId: this.getByStudentId,
    };
    this.services.studentByIds(params).subscribe((respp: any) => {
      if (respp.statusCode == 200) {
        this.studentDetails = respp.data;
        // this.userName = respp.resp.name;
      }
    });
  }

  logout() {
    this.router.navigateByUrl(`/Sign-In`);
    localStorage.removeItem('studentId');
  }

  modalUpdate() {
    $('#updateModal').modal('show');

    this.studentForm.controls['name'].setValue(this.studentDetails.name);
    this.studentForm.controls['lastName'].setValue(
      this.studentDetails.lastName
    );

    this.studentForm.controls['email'].setValue(this.studentDetails.email);
    this.studentForm.controls['phNumber'].setValue(
      this.studentDetails.phNumber
    );
    this.studentForm.controls['addressLine1'].setValue(
      this.studentDetails.addressLine1
    );
    this.studentForm.controls['addressLine2'].setValue(
      this.studentDetails.addressLine2
    );
    this.studentForm.controls['city'].setValue(this.studentDetails.city);
    this.studentForm.controls['state'].setValue(this.studentDetails.state);
    this.studentForm.controls['country'].setValue(this.studentDetails.country);
    this.studentForm.controls['pincode'].setValue(this.studentDetails.pincode);

    this.studentId = this.studentDetails.studentId;
  }

  updateStudent() {
    if (this.studentForm.valid) {
      const updateStudentObj = new FormData();
      updateStudentObj.append('studentId', this.studentId);
      // updateStudentObj.append('userId', this.userId)

      updateStudentObj.append('name', this.studentForm.value.name);
      updateStudentObj.append('email', this.studentForm.value.email);
      updateStudentObj.append('phNumber', this.studentForm.value.phNumber);

      updateStudentObj.append('lastName', this.studentForm.value.lastName);
      updateStudentObj.append(
        'addressLine1',
        this.studentForm.value.addressLine1
      );
      updateStudentObj.append(
        'addressLine2',
        this.studentForm.value.addressLine1
      );
      updateStudentObj.append('city', this.studentForm.value.city);
      updateStudentObj.append('state', this.studentForm.value.state);
      updateStudentObj.append('country', this.studentForm.value.country);
      updateStudentObj.append('pincode', this.studentForm.value.pincode);

      console.log('dsdsdssdsd', updateStudentObj);

      this.services.updateStudent(updateStudentObj).subscribe((updateResp) => {
        if (updateResp.statusCode == 200) {
          console.log('success');
          Swal.fire({
            icon: 'success',
            text: 'Student Details Updated Successfuly',
            timer: 2000,
            showConfirmButton: false,
          });
          $('#updateModal').modal('hide');
          this.getStudentById();
        } else {
          console.log('error');
          Swal.fire({
            icon: 'error',
            text: 'Please Add Unique language',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    }
  }
}
