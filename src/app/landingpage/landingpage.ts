import { Component } from '@angular/core';
import { Register } from '../register/register';
import { Login } from '../login/login';

@Component({
  selector: 'app-landingpage',
  imports: [Register, Login],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css'
})
export class Landingpage {
  showLogin = false;

  // Wird aufgerufen, wenn das Output-Event ausgelöst wird
  onSwitchToLogin() {
    this.showLogin = true;
  }

  onSwitchToRegister() {
    this.showLogin = false;
  }
}
