import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class HelloService {

  serverUrl : string = environment.BACKEND_URL + "/service/auth/users";

  constructor(private http: HttpClient) { }

  getHelloWorldFromService() : string {
      return "hello world from the service";
  }

  getHelloWorldFromJava() {
    return this.http.get(this.serverUrl);
  }

}
