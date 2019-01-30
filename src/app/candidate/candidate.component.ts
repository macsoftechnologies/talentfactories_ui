import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../_services/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
  providers: [CandidateService]
})
export class CandidateComponent implements OnInit {
  candidateLoginForm: FormGroup;
  candidateRegistrationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public rest: CandidateService
  ) { }

  ngOnInit() {
    this.candidateLoginForm = this.fb.group({
      email: ['', Validators.required],
      userpassword: ['', Validators.required]
    });

    this.candidateRegistrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onCandidateSubmit(value) {
    console.log("onCandidateSubmit-->", value.value);
    let formData = {
      "email": value.value.email,
      "password": value.value.userpassword
    }

    this.rest.candidateLogin(formData).subscribe((loginObj: any) => {
      console.log("Candidate Login--> ", JSON.stringify(loginObj));
      alert(loginObj.message);
      this.router.navigate(['/']);
    });

  }

  public onCandidateRegistration(value) {
    console.log("onCandidateRegistration-->", value.value);

    let formData = {
      "firstName": value.value.firstName,
      "lastName": value.value.lastName,
      "email": value.value.email,
      "password": value.value.password
    }
    console.log("Candidate Register Obj-->", JSON.stringify(formData));

    this.rest.candidateRegistration(formData).subscribe((regObj: any) => {
      console.log("Create Candidate --> ", JSON.stringify(regObj.message));
      alert(regObj.message);
      this.router.navigate(['/']);
    });

  }

}


