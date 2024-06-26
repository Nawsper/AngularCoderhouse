import { Injectable } from '@angular/core';
import { CreateUserPayload, IUser } from './models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(environment.baseAPIURL + '/users');
  }

  getUserById(id: number): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(`${environment.baseAPIURL}/users/${id}`);
  }

  createUser(payload: CreateUserPayload): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.baseAPIURL}/users`,
      payload
    );
  }

  updateUser(id: number, payload: CreateUserPayload): Observable<IUser> {
    return this.httpClient.put<IUser>(
      `${environment.baseAPIURL}/users/${id}`,
      payload
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.baseAPIURL}/users/${id}`
    );
  }
}
