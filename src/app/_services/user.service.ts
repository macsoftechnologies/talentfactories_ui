import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.BACKEND_URL}/auth/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.BACKEND_URL}/auth/user/id` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.BACKEND_URL}/auth/register`, user);
    }

    // update(user: User) {
    //    return this.http.put(`/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`/users/` + id);
    // }
}