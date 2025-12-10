import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class AuthLayoutComponent {}
