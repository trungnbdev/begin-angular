import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/login/pages/login';
import { HomeComponent } from './modules/home/home.component';
import { AuthLayoutComponent } from './layouts/auth';
import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/not-auth.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Trang chủ',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    title: 'Đăng nhập',
    component: AuthLayoutComponent,
    canActivate: [NotAuthGuard],
    children: [
      {
        path: '',
        component: LoginPageComponent,
      },
    ],
  },
];
