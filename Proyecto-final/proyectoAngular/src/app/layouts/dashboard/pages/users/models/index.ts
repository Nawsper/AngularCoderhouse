export type UserRole = 'admin' | 'alumno' | 'profesor';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdDate: Date;
}

export interface CreateUserPayload {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  role: UserRole | null;
  createdDate: Date | null;
}
