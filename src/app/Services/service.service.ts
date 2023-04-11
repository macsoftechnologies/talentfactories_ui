import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  // student sign-up

  public studentSingup(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'student/createStudent',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // institution sign up

  public institutionSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'learning-org/AddlearnOrg',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // professional sign up

  public professionalSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'learning-org/AddlearnOrg',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // employer sign up

  public employerSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'organization/createOrganization',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // institution SignIn

  public institutionSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'learning-org/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // Admin SignIn

  public adminSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(environment.baseUrl + 'admin/login', data);
    } catch (error) {
      return throwError('error');
    }
  }

  // employer SignIn

  public employerSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'organization/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // student SignIn

  public studentSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(environment.baseUrl + 'student/login', data);
    } catch (error) {
      return throwError('error');
    }
  }
  // professional SignIn

  public professionalSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'professional/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }
}
