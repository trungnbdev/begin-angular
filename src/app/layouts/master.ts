import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'master-layout',
  templateUrl: './master.html',
  standalone: true,
  imports: [CommonModule],
})
export class MasterLayoutComponent {}
