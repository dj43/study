import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const interceptInterceptor: HttpInterceptorFn = (req, next) => {
  let newReq = req.clone({
    headers: req.headers.append('test', 'teest'),
  });
  return next(newReq);
};
