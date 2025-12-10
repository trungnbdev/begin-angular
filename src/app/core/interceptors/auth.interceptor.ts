import { HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const auth = inject(AuthService);
  const accessToken = auth.accessToken() || '';
  const refreshToken = auth.refreshToken() || '';
  // Clone the request to add the authentication header.

  const headers = new HttpHeaders({
    'x-client-uuid': '00000',
    'x-client-platform': 'Windows',
    'x-client-mobile': '?0',
  });

  if (req.url.includes('auth/cms-login')) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }

  const newReq = req.clone({
    headers: headers,
  });
  return next(newReq);
}
