import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../../services/auth.service';
import { RedirectCommand, Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: '../templates/login.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
  ],
})
export class LoginPageComponent {
  constructor(
    private router: Router // <-- inject Router
  ) {}
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  logoUrl = 'assets/images/login-logo.png';
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  autoTips: Record<string, Record<string, string>> = {
    default: {
      required: 'Trường này không được bỏ trống',
    },
  };
  submitForm(): void {
    if (this.loginForm.valid) {
      const { password, username } = this.loginForm.value;
      this.authService
        .login({
          password: password || '',
          username: username || '',
          type: 'ADMIN',
          subdomain: 'branch1',
        })
        .subscribe({
          next: (res) => {
            if (res.data) {
              this.router.navigate(['/']);
              localStorage.setItem('begin-angular-token', res.data);
            }
          },
          error: () => {},
        });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
