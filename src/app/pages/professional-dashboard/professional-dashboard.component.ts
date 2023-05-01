import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
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
  constructor(private router: Router, private services: ServiceService) {
    this.professionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phNumber: new FormControl('', [Validators.required]),
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
    console.log('shanmukh');
    $('#updateModal').modal('show');

    this.professionForm.controls['name'].setValue(this.professionDetails.name);
    this.professionForm.controls['email'].setValue(
      this.professionDetails.email
    );
    this.professionForm.controls['phNumber'].setValue(
      this.professionDetails.phNumber
    );
  }
}
