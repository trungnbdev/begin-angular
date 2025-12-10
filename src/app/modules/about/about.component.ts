import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class AboutComponent {}
