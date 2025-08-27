import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  @Output() switchToRegister = new EventEmitter<void>();
}
