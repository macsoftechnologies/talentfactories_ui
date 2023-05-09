import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
declare const $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-institution-dashboard',
  templateUrl: './institution-dashboard.component.html',
  styleUrls: ['./institution-dashboard.component.scss'],
})
export class InstitutionDashboardComponent {
  userName: any;
  getByInstitutionId: string | null | undefined;
  institutionDetails: any;
  institutionForm: any;
  learningOrgId: any;

  constructor(private router: Router, private services: ServiceService) {
    this.institutionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phNumber: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      memebers: new FormControl('', [Validators.required]),
      courses: new FormControl('', [Validators.required]),
      resource: new FormControl('', [Validators.required]),
      Location: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getByInstitutionId = localStorage.getItem('learningOrgId');
    this.getInstitutionById();
  }

  getInstitutionById() {
    let params = {
      learningOrgId: this.getByInstitutionId,
    };
    this.services.institutionByIds(params).subscribe((respp: any) => {
      if (respp.statusCode == 200) {
        this.institutionDetails = respp.data;
        // this.userName = respp.resp.name;
      }
    });
  }

  logout() {
    this.router.navigateByUrl(`/Sign-In`);
    localStorage.removeItem('learningOrgId');
  }

  modalUpdate() {
    $('#updateModal').modal('show');

    this.institutionForm.controls['name'].setValue(
      this.institutionDetails.name
    );
    this.institutionForm.controls['email'].setValue(
      this.institutionDetails.email
    );
    this.institutionForm.controls['phNumber'].setValue(
      this.institutionDetails.phoneNumber
    );
    this.institutionForm.controls['description'].setValue(
      this.institutionDetails.description
    );
    this.institutionForm.controls['memebers'].setValue(
      this.institutionDetails.memebers
    );
    this.institutionForm.controls['courses'].setValue(
      this.institutionDetails.courses
    );
    this.institutionForm.controls['resource'].setValue(
      this.institutionDetails.resource
    );
    this.institutionForm.controls['Location'].setValue(
      this.institutionDetails.Location
    );
    this.learningOrgId = this.institutionDetails.learningOrgId;

    console.log('learningOrgId', this.learningOrgId);
  }

  updateInstitution() {
    console.log('hit');
    // if (this.institutionForm.valid) {
    //   console.log('hit1');
    let updateinstitutionObj = {
      learningOrgId: this.learningOrgId,
      name: this.institutionForm.value.name,
      email: this.institutionForm.value.email,
      phNumber: this.institutionForm.value.phNumber,
      description: this.institutionForm.value.description,
      memebers: this.institutionForm.value.memebers,
      courses: this.institutionForm.value.courses,
      // resource: this.institutionForm.value.resource,
      Location: this.institutionForm.value.Location,
    };

    console.log('dsdsdssdsd', updateinstitutionObj);

    this.services
      .updateInstitution(updateinstitutionObj)
      .subscribe((updateResp) => {
        if (updateResp.statusCode == 200) {
          console.log('success');
          Swal.fire({
            icon: 'success',
            text: 'Institution Details Updated Successfuly',
            timer: 2000,
            showConfirmButton: false,
          });
          $('#updateModal').modal('hide');
          this.getInstitutionById();
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
    // }
  }
}
