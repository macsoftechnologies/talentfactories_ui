import { HttpClient, HttpParams } from '@angular/common/http';
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
        environment.baseUrl + 'professional/createProfessional',
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
      return this.httpClient.post(
        environment.baseUrl + 'student/loginstudent',
        data
      );
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

  // Institution get by id values

  public institutionByIds(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'learning-org/getlearnOrgById',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // professional get by id values

  public professionalByIds(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'professional/getProfessionById',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // student get by id values

  public studentByIds(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'student/getStudentById',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // Employer get by id values

  public EmployerByIds(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'organization/getOrganizationById',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // get Institution details

  public getInstitutionDetails(): Observable<any> {
    try {
      return this.httpClient.get(
        environment.baseUrl + 'learning-org/getLearningOrg'
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // get Professional details

  public getProfessionalDetails(): Observable<any> {
    try {
      return this.httpClient.get(environment.baseUrl + 'professional');
    } catch (error) {
      return throwError('error');
    }
  }

  // get Student details

  public getStudentDetails(): Observable<any> {
    try {
      return this.httpClient.get(environment.baseUrl + 'student/getStudents');
    } catch (error) {
      return throwError('error');
    }
  }

  // get Student details

  public getEmployerDetails(): Observable<any> {
    try {
      return this.httpClient.get(
        environment.baseUrl + 'organization/getOrganization'
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // delete Institution Details

  public institutionDelete(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'learning-org/deletelearnOrg',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // delete Professional Details

  public professionalDelete(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'professional/deleteProfession',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // delete Student Details

  public studentDelete(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'student/deleteStudent',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // delete Employer Details

  public employerDelete(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'organization/deleteOrganization',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // Update Institution Details

  public updateInstitution(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'learning-org/UpdatelearningOrg',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // Update Professional Details

  public updateProfessional(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'professional/updateProfessional',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // Update Student Details

  public updateStudent(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'student/updateStudent',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // Update Employer Details

  public updateEmployer(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'organization/updateOrganzation',
        data
      );
    } catch (error) {
      return throwError('error');
      // return;
    }
  }

  // get job notification for professional

  public getJobNotify(): Observable<any> {
    try {
      return this.httpClient.get(environment.baseUrl + 'jobs/getJobs');
    } catch (error) {
      return throwError('error');
    }
  }

  // get job notification for professional

  public getApplicant(): Observable<any> {
    try {
      return this.httpClient.get(
        environment.baseUrl + 'applicant/applicantList'
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // apply applicant details for job

  public applyApplicant(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'applicant/addaplicant',
        data
      );
    } catch (error) {
      return throwError('error');
      // return;
    }
  }

  // post job notification details

  public postJobDetails(data: any): Observable<any> {
    try {
      return this.httpClient.post(environment.baseUrl + 'jobs/addJobs', data);
    } catch (error) {
      return throwError('error');
      // return;
    }
  }

  // delete apply job applicant

  public deleteJobApplicant(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        environment.baseUrl + 'applicant/removeApplicant',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  public getSearchJob(
    jobTitle: string,
    jobWorkCountry: string
  ): Observable<any> {
    // Create an instance of HttpParams to handle query parameters
    try {
      let params = new HttpParams()
        .set('jobTitle', jobTitle)
        .set('jobWorkCountry', jobWorkCountry);

      // Make the GET request with the specified query parameters
      return this.httpClient.get(environment.baseUrl + 'jobs/search', {
        params,
      });
      // return this.http.get('https://your-api-url.com/data', { params });
    } catch (error) {
      return throwError('error');
    }
  }
}
