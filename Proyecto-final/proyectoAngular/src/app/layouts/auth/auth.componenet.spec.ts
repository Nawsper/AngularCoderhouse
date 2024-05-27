import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../../core/services/auth.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [SharedModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);

    fixture.detectChanges();
  });

  it('Campo email requerido', () => {
    const control = component.loginForm.get('email');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Campo paasword requerido', () => {
    const control = component.loginForm.get('password');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe llamar, si el formulario es invalido en el login, al markAllAsTouched', () => {
    component.loginForm.setValue({ email: '', password: '' });
    expect(component.loginForm.invalid).toBeTrue();
    const spymarkAllAsTouched = spyOn(component.loginForm, 'markAllAsTouched');
    component.login();
    expect(spymarkAllAsTouched).toHaveBeenCalled();
  });

  it('Debe llamar a authService.login si el formulario es valido en el login', () => {
    component.loginForm.setValue({ email: 'mail@mail.com', password: '1234' });
    expect(component.loginForm.valid).toBeTrue();
    const spyOnLogin = spyOn(authService, 'login');
    component.login();
    expect(spyOnLogin).toHaveBeenCalled();
  });
});
