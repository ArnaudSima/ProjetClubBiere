import { Injectable } from '@angular/core';
import { User } from './user';
import translations from '../../../languageSettings.json';
type Languages = keyof typeof translations;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Users: User[] = [
    { Email: 'user@example.com', Password: '123456' },
    { Email: 'admin@example.com', Password: 'admin123' },
  ];
  CurrentUser: User | null = null;
  //to be changed
  LanguagePref: Languages = 'FR';
  IsMajor: boolean = false;
  //Login
  CredentialsAreCorrect(email: string, password: string): boolean {
    for (let user of this.Users) {
      if (user.Email === email && user.Password === password) {
        return true;
      }
    }
    return false;
  }
  LoginUser(user: User) {
    this.CurrentUser = user;
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
  //User Prefs
  ChangeLanguage(requestedLanguage: Languages): void {
    this.LanguagePref = requestedLanguage;
  }
  ChangeIsMajor(isMajor: boolean) {
    this.IsMajor = isMajor;
  }
}
