import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const authRequired = route.data['authRequired']; // ⬅ Lấy tham số truyền từ bên router
    const token = localStorage.getItem('begin-angular-token');

    if (!token) {
      // Đã login → chặn vào trang login → chuyển ra home
      this.router.navigate(['/login']);
      return false; // chặn truy cập login
    }

    return true; // cho phép vào trang login
  }
}
