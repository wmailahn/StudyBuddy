import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  @Output() switchToLogin = new EventEmitter<void>();
}
