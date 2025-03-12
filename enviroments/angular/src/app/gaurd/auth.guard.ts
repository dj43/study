import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, state) => {
  let router = inject(Router);
  let token = localStorage.getItem('token');
  // if (route.path === 'login') {
  //   if (token) {
  //     router.navigate(['home']);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  if (token) {
    return true;
  } else {
    // router.navigate(['login']);
    return false;
  }
};
