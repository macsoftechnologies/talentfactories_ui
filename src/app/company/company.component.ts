import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CompanyService } from '../_services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyLogin: FormGroup;
  companyRegistration: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public rest: CompanyService
  ) { }

  ngOnInit() {
    this.companyLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.companyRegistration = this.fb.group({
      companyName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }


  login(value) {
    console.log("C");
  }

  registration(value) {
    let formData = {
      "companyName": value.value.companyName,
      "address": value.value.address,
      "city": value.value.city,
      "state": value.value.state,
      "zip": value.value.zip,
      "country": value.value.country,
      "password": value.value.password,
      "companyLoginId": value.value.email
    }

    this.rest.registration(formData).subscribe((regObj: any) => {
      console.log("Company Regstraion Obj-->", JSON.stringify(regObj));
      alert(regObj.message);
      this.router.navigate(['/']);
    });


  }



}
