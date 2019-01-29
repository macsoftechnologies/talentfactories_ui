import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  candidateLoginForm: FormGroup;
  candidateRegistrationForm: FormGroup;
  constructor(
    private fb: FormBuilder
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
    console.log("onCandidateSubmit", value);
  }

  public onCandidateRegistration() {
    console.log("onCandidateRegistration");
  }

}


