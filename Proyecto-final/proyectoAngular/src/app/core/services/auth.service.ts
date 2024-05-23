import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../../layouts/dashboard/pages/users/models';
import { LoginData } from '../../layouts/auth/models';
import { Route, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private MOCK_AUTH_USER: IUser = {
    id: 123456,
    firstName: 'Username',
    lastName: 'userLastName',
    email: 'user@mail.com',
    role: 'alumno',
    createdDate: new Date(),
  };

  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) {}

  login(data: LoginData): void {
    console.log('Intentando iniciar sesión con', data);
    if (data.email !== 'user@mail.com' || data.password !== '1234') {
      alert('Correo o contraseña incorrectos');
    } else {
      console.log('Login exitoso');
      this._authUser$.next(this.MOCK_AUTH_USER);
      localStorage.setItem('accessToken', 'asdfghjkl');
      this.router.navigate(['danceacademy', 'home']);
    }
  }

  verifyToken(): boolean {
    const token = localStorage.getItem('accessToken');

    if (token) {
      this._authUser$.next(this.MOCK_AUTH_USER);
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('accessToken');
  }
}
