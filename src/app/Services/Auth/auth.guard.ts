import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.UserIsLoggedIn()) {
    return true;
  } else {
    console.log('Pas logged in');
    router.navigate(['/auth']);
    return false;
  }
};
