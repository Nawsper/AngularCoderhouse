import { Injectable } from '@angular/core';
import { IUser } from './models';
import { of, Observable, delay, throwError, first } from 'rxjs';

const USERS_DB: IUser[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role: 'profesor',
    createdDate: new Date(),
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    role: 'profesor',
    createdDate: new Date(),
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    role: 'alumno',
    createdDate: new Date(),
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Brown',
    email: 'emily.brown@example.com',
    role: 'admin',
    createdDate: new Date(),
  },
  {
    id: 5,
    firstName: 'James',
    lastName: 'Wilson',
    email: 'james.wilson@example.com',
    role: 'alumno',
    createdDate: new Date(),
  },
  {
    id: 6,
    firstName: 'Emma',
    lastName: 'Taylor',
    email: 'emma.taylor@example.com',
    role: 'alumno',
    createdDate: new Date(),
  },
  {
    id: 7,
    firstName: 'Daniel',
    lastName: 'Anderson',
    email: 'daniel.anderson@example.com',
    role: 'alumno',
    createdDate: new Date(),
  },
  {
    id: 8,
    firstName: 'Olivia',
    lastName: 'Thomas',
    email: 'olivia.thomas@example.com',
    role: 'alumno',
    createdDate: new Date(),
  },
  {
    id: 9,
    firstName: 'William',
    lastName: 'Jackson',
    email: 'william.jackson@example.com',
    role: 'alumno',
    createdDate: new Date(),
  },
  {
    id: 10,
    firstName: 'Sophia',
    lastName: 'White',
    email: 'sophia.white@example.com',
    role: 'alumno',
    createdDate: new Date(),
  },
];

@Injectable({ providedIn: 'root' })
export class UsersService {
  getUsers(): Observable<IUser[]> {
    return of(USERS_DB).pipe(delay(1500));
  }

  getUsersById(id: number): Observable<IUser | undefined> {
    return of(USERS_DB.find((element) => element.id === id));
  }
}
