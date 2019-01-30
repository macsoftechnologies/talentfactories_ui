import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${environment.LOCAL_URL}/company/login`, data).pipe(
      map(this.extractData)
    )
  };

  registration(data: any): Observable<any> {
    return this.http.post<any>(`${environment.LOCAL_URL}/company/register`, data).pipe(
      map(this.extractData)
    )
  };
}
