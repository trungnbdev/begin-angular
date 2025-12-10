import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent {
  private test = '';
}
