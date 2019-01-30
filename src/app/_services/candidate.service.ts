import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  candidateRegistration(data: any): Observable<any> {
    return this.http.post<any>(`${environment.LOCAL_URL}/candidate/register`, data).pipe(
      map(this.extractData)
    )
  };

  candidateLogin(data: any): Observable<any> {
    return this.http.post<any>(`${environment.LOCAL_URL}/candidate/login`, data).pipe(
      map(this.extractData)
    )
  };
}
