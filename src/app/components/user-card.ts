import { CommonModule } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.html',
  standalone: true,
  imports: [CommonModule],
})
export class UserCardComponent {
  isActive = true;
  @HostBinding('class.active') isActiveValue = this.isActive;
  // Thay đổi background-color thông qua style binding
  @HostBinding('style.backgroundColor') bgColor = 'lightblue';
}
