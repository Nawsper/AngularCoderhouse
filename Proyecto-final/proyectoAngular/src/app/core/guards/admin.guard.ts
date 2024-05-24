import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authUser$.pipe(
    map((authUser) => {
      const allowedRoles = ['admin', 'profesor'];
      const userRole = authUser?.role;

      if (userRole && allowedRoles.includes(userRole)) {
        return true;
      } else {
        return router.createUrlTree(['danceacademy', 'home']);
      }
    })
  );
};
