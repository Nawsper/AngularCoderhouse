import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../layouts/dashboard/pages/users/models';
import { authActions } from './auth.actions';

export interface AuthState {
  authUser: null | IUser;
}

const initialState: AuthState = { authUser: null };

const MOCK_AUTH_USER: IUser = {
  id: 123456,
  firstName: 'Username',
  lastName: 'userLastName',
  email: 'user@mail.com',
  role: 'admin',
  createdDate: new Date(),
};

export const authFeatureName = 'auth';

export const authReducer = createReducer(
  initialState,
  on(authActions.login, (state, action) => {
    console.log('Intentando iniciar sesión con', action.payload);
    if (
      action.payload.email !== 'user@mail.com' ||
      action.payload.password !== '1234'
    ) {
      alert('Correo o contraseña incorrectos');
      return state;
    } else {
      console.log('Login exitoso');
      localStorage.setItem('accessToken', 'asdfghjkl');
      return { authUser: MOCK_AUTH_USER };
    }
  }),
  on(authActions.logout, () => {
    localStorage.removeItem('accessToken');
    return initialState;
  })
);
