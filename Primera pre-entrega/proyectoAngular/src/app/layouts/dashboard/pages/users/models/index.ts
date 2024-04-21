export type UserRole = 'admin' | 'alumno' | 'profesor';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdDate: Date;
}
