import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
declare const $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss'],
})
export class EmployerDashboardComponent {
  employerForm: any;
  getByEmployerId: string | null | undefined;
  employersDetails: any;
  organizationId: any;
  constructor(private router: Router, private services: ServiceService) {
    this.employerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phNumber: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getByEmployerId = localStorage.getItem('organizationId');
    this.getEmployerById();
  }

  getEmployerById() {
    let params = {
      organizationId: this.getByEmployerId,
    };
    this.services.EmployerByIds(params).subscribe((respp: any) => {
      if (respp.statusCode == 200) {
        this.employersDetails = respp.data;
        // this.userName = respp.resp.name;
      }
    });
  }

  logout() {
    this.router.navigateByUrl(`/Sign-In`);
    localStorage.removeItem('organizationId');
  }

  modalUpdate() {
    $('#updateModal').modal('show');
    this.employerForm.controls['name'].setValue(this.employersDetails.name);
    this.employerForm.controls['email'].setValue(this.employersDetails.email);
    this.employerForm.controls['phNumber'].setValue(
      this.employersDetails.phNumber
    );
    this.employerForm.controls['description'].setValue(
      this.employersDetails.description
    );
    this.employerForm.controls['location'].setValue(
      this.employersDetails.location
    );

    this.organizationId = this.employersDetails.organizationId;
  }

  updateEmployerDetails() {
    if (this.employerForm.valid) {
      let updateEmployerObj = {
        organizationId: this.organizationId,
        name: this.employerForm.value.name,
        email: this.employerForm.value.email,
        phNumber: this.employerForm.value.phNumber,
        description: this.employerForm.value.description,
        location: this.employerForm.value.location,
      };

      // console.log(updateEmployerObj, 'dsdsdssdsd');

      this.services
        .updateEmployer(updateEmployerObj)
        .subscribe((updateResp) => {
          if (updateResp.statusCode == 200) {
            console.log('success');
            Swal.fire({
              icon: 'success',
              text: 'Employer Details Updated Successfuly',
              timer: 2000,
              showConfirmButton: false,
            });
            $('#updateModal').modal('hide');
            this.getEmployerById();
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
