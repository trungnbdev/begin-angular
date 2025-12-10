import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { apiUrls } from '../../../constants/url';
import { LoginInput } from '../types/login.input';
import { tap } from 'rxjs';
import { HttpResponse } from '../../../shared/types/base.response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  accessToken = signal<string | null>(localStorage.getItem('accessToken'));
  refreshToken = signal<string | null>(localStorage.getItem('refreshToken'));

  login(payload: LoginInput) {
    return this.http.post<HttpResponse<string>>(apiUrls.loginUrl, payload).pipe(
      tap((res) => {
        this.accessToken.set(res.data);
      })
    );
  }
}
