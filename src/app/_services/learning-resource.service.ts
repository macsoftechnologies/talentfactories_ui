import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LearningResourceService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${environment.LOCAL_URL}/lrUser/login`, data).pipe(
      map(this.extractData)
    )
  };

  registration(data: any): Observable<any> {
    return this.http.post<any>(`${environment.LOCAL_URL}/lrUser/register`, data).pipe(
      map(this.extractData)
    )
  };
}
