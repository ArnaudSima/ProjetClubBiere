import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Users: User[] = [
    { Email: 'user@example.com', Password: '123456' },
    { Email: 'admin@example.com', Password: 'admin123' },
  ];
  CurrentUser: User | null = null;
  //Login
  LoginUser(email: string, password: string): void {
    for (let user of this.Users) {
      if (user.Email === email && user.Password === password) {
        this.CurrentUser = { Email: email, Password: password };
      }
    }
  }
  UserIsLoggedIn(): boolean {
    if (this.CurrentUser === null) {
      return false;
    } else {
      return true;
    }
  }
  //Logout
  LogOut() {
    this.CurrentUser = null;
  }
  //Sign up
}
