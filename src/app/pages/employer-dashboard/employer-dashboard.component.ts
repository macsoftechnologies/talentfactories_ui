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
  applicantList: any;
  jobPostForm: any;
  constructor(private router: Router, private services: ServiceService) {
    this.employerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phNumber: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
    });
    this.jobPostForm = new FormGroup({
      jobTitle: new FormControl('', [Validators.required]),
      jobShortNotes: new FormControl('', [Validators.required]),
      jobLongNotes: new FormControl('', [Validators.required]),
      jobWorkCity: new FormControl('', [Validators.required]),
      jobWorkState: new FormControl('', [Validators.required]),
      jobWorkCountry: new FormControl('', [Validators.required]),
      jobMandatorySkills: new FormControl('', [Validators.required]),
      jobOptionalSkills: new FormControl('', [Validators.required]),
      JobStatus: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getByEmployerId = localStorage.getItem('organizationId');
    this.getEmployerById();
    this.getAplicantDetails();
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

  getAplicantDetails() {
    this.services.getApplicant().subscribe((ApplicantResp) => {
      if (ApplicantResp.statusCode == 200) {
        this.applicantList = ApplicantResp.data;
        console.log('applicantList', this.applicantList);
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

  jobPost() {
    if (this.jobPostForm.valid) {
      let jobPostObj = {
        jobTitle: this.jobPostForm.value.jobTitle,
        jobShortNotes: this.jobPostForm.value.jobShortNotes,
        jobLongNotes: this.jobPostForm.value.jobLongNotes,
        jobWorkCity: this.jobPostForm.value.jobWorkCity,
        jobWorkState: this.jobPostForm.value.jobWorkState,
        jobWorkCountry: this.jobPostForm.value.jobWorkCountry,
        jobWorkZipcode: this.jobPostForm.value.jobWorkZipcode,
        jobMandatorySkills: this.jobPostForm.value.jobMandatorySkills,
        jobOptionalSkills: this.jobPostForm.value.jobOptionalSkills,
        JobStatus: this.jobPostForm.value.JobStatus,
      };

      // console.log(updateEmployerObj, 'dsdsdssdsd');

      this.services.postJobDetails(jobPostObj).subscribe((postResp) => {
        if (postResp.statusCode == 200) {
          Swal.fire({
            icon: 'success',
            text: 'Job Details Posted Successfuly',
            timer: 2000,
            showConfirmButton: false,
          });
          this.jobPostForm.reset();
        } else {
          console.log('error');
          Swal.fire({
            icon: 'error',
            text: 'Please Add Unique Job Details',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    }
  }

  deleteApplicant(data: any) {
    let DeleteObj = {
      applicantId: data.applicantId,
    };

    Swal.fire({
      title: 'Are you sure want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.services.deleteJobApplicant(DeleteObj).subscribe((deleteResp) => {
          if (deleteResp.statusCode == 200) {
            Swal.fire({
              icon: 'success',
              text: 'Applicant Details Successfully Deleted',
              showConfirmButton: false,
              timer: 3000,
            });
            this.getAplicantDetails();
          } else {
            Swal.fire('Something went wrong...!');
          }
        });
      }
    });
  }
}
