import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnDestroy, OnInit {
  // authUserChangeSubscription?: Subscription;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ0-9]+$')],
      ],
    });
  }

  ngOnInit(): void {
    // this.subscribeToAuthUserChange();
  }

  ngOnDestroy(): void {
    // this.authUserChangeSubscription?.unsubscribe();
  }

  // subscribeToAuthUserChange(): void {
  //   this.authUserChangeSubscription = this.authService.authUser$.subscribe({
  //     next: (authUser) => {
  //       if (authUser != null) {
  //         console.log('Usuario autenticado, redirigiendo...');
  //         this.router.navigate(['danceacademy', 'home']);
  //       }
  //     },
  //   });
  // }

  login() {
    console.log('Iniciando proceso de login');
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.getRawValue());
    }
  }
}
