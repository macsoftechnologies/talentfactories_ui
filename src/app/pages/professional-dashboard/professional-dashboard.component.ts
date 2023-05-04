import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';

declare const $: any;
@Component({
  selector: 'app-professional-dashboard',
  templateUrl: './professional-dashboard.component.html',
  styleUrls: ['./professional-dashboard.component.scss'],
})
export class ProfessionalDashboardComponent {
  getByProfessionId: string | null | undefined;
  professionDetails: any;
  userName: any;
  professionForm: any;
  professionalId: any;
  constructor(private router: Router, private services: ServiceService) {
    this.professionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phNumber: new FormControl('', [Validators.required]),
      adressLine1: new FormControl('', [Validators.required]),
      adressLine2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getByProfessionId = localStorage.getItem('professionalId');
    this.getProfession();
  }

  getProfession() {
    let params = {
      professionalId: this.getByProfessionId,
    };
    this.services.professionalByIds(params).subscribe((respp: any) => {
      if (respp.statusCode == 200) {
        this.professionDetails = respp.resp;
        // this.userName = respp.resp.name;
      }
    });
  }

  logout() {
    this.router.navigateByUrl(`/Sign-In`);
    localStorage.removeItem('professionalId');
  }

  modalUpdate() {
    $('#updateModal').modal('show');

    this.professionForm.controls['name'].setValue(this.professionDetails.name);
    this.professionForm.controls['lname'].setValue(
      this.professionDetails.lastName
    );

    this.professionForm.controls['email'].setValue(
      this.professionDetails.email
    );
    this.professionForm.controls['phNumber'].setValue(
      this.professionDetails.phNumber
    );
    this.professionForm.controls['adressLine1'].setValue(
      this.professionDetails.addressLine1
    );
    this.professionForm.controls['adressLine2'].setValue(
      this.professionDetails.addressLine2
    );
    this.professionForm.controls['city'].setValue(this.professionDetails.city);
    this.professionForm.controls['state'].setValue(
      this.professionDetails.state
    );
    this.professionForm.controls['country'].setValue(
      this.professionDetails.country
    );
    this.professionForm.controls['pincode'].setValue(
      this.professionDetails.pinCode
    );

    this.professionalId = this.professionDetails.professionalId;
  }

  updateProfession() {
    if (this.professionForm.valid) {
      const updateprofessionObj = new FormData();
      updateprofessionObj.append('professionalId', this.professionalId);
      // updateprofessionObj.append('userId', this.userId)

      updateprofessionObj.append('name', this.professionForm.value.name);
      updateprofessionObj.append('email', this.professionForm.value.email);
      updateprofessionObj.append(
        'phNumber',
        this.professionForm.value.phNumber
      );

      updateprofessionObj.append('lastName', this.professionForm.value.lname);
      updateprofessionObj.append(
        'addressLine1',
        this.professionForm.value.adressLine1
      );
      updateprofessionObj.append(
        'addressLine2',
        this.professionForm.value.adressLine2
      );
      updateprofessionObj.append('city', this.professionForm.value.city);
      updateprofessionObj.append('state', this.professionForm.value.state);
      updateprofessionObj.append('country', this.professionForm.value.country);
      updateprofessionObj.append('pinCode', this.professionForm.value.pincode);

      console.log('dsdsdssdsd', updateprofessionObj);

      this.services
        .updateProfessional(updateprofessionObj)
        .subscribe((updateResp) => {
          if (updateResp.statusCode == 200) {
            console.log('success');
            Swal.fire({
              icon: 'success',
              text: 'Professional Details Updated Successfuly',
              timer: 2000,
              showConfirmButton: false,
            });
            $('#updateModal').modal('hide');
            this.getProfession();
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
