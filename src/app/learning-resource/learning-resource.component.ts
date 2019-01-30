import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LearningResourceService } from '../_services/learning-resource.service';

@Component({
  selector: 'app-learning-resource',
  templateUrl: './learning-resource.component.html',
  styleUrls: ['./learning-resource.component.scss']
})
export class LearningResourceComponent implements OnInit {
  lrForm: FormGroup;
  lrRegistration: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public rest: LearningResourceService
  ) { }

  ngOnInit() {
    this.lrForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.lrRegistration = this.fb.group({
      lrName: ['', Validators.required],
      email: ['', Validators.required],
      lrtype: ['', Validators.required],
      lremail: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required]
    });

  }

  login(value) {

  }

  registration(value) {
    let formData = {
      "LRName": value.value.lrName,
      "contactEmailId": value.value.email,
      "type": value.value.lrtype,
      "address": value.value.address,
      "city": value.value.city,
      "state": value.value.state,
      "zip": value.value.zip,
      "country": value.value.country,
      "LRLoginId": value.value.lremail,
      "password": value.value.password
    }

    this.rest.registration(formData).subscribe((regObj: any) => {
      console.log("LearningResource Regstraion Obj-->", JSON.stringify(regObj));
      alert(regObj.message);
      this.router.navigate(['/']);
    });
  }

}
