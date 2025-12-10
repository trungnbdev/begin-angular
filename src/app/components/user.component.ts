import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  effect,
  HostBinding,
  input,
  output,
  signal,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserCardComponent } from './user-card';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    UserCardComponent,
  ],
})
export class UsersComponent {
  constructor() {
    effect(() => {
      console.log('price changed', this.price());
    });
  }
  price = signal(0);
  age: number = 0;
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  avatar: string =
    'https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg';
  handleClick() {
    this.age++;
    this.onChangeOccupation.emit('Developer 1');
  }
  occupation = input<string>('');
  onChangeOccupation = output<string>();
  country = '';
  showCountry() {
    alert(this.country);
  }
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  onSubmitForm(event: Event) {
    console.log(this.profileForm.value);
    this.price.set(this.price() + 1);
  }

  name = input('');
  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
