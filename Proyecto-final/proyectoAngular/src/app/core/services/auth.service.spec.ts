import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService] });
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });
  it('Debe establecer un usuario autenticado al llamar al login', () => {
    const spyOnSetItem = spyOn(localStorage, 'setItem');
    const spyOnNavigate = spyOn(router, 'navigate');
    authService.login({ email: 'user@mail.com', password: '1234' });
    authService.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toBeTruthy();
        expect(spyOnSetItem).toHaveBeenCalled();
      },
    });
  });

  it('Debe mostrar mensaje de alerta si los datos igresados son incorrectos', () => {
    const spyOnAlert = spyOn(window, 'alert');
    authService.login({
      email: 'error@mail.com',
      password: 'error ',
    });
    expect(spyOnAlert).toHaveBeenCalled();
  });
});
