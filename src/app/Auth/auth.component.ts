import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormType } from './FormTypes';
import { AuthService } from '../Services/Auth/auth.service';
@Component({
  selector: 'projet-test-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  ngOnInit(): void {
    this.RedirectUser();
  }

  Columns: number = 4;
  Rows: number = 4;
  InputTypes: string[] = ['placeholder'];
  Title = FormType.SignIn;
  RedirectUser(): void {
    if ((this.Title = FormType.SignIn)) {
      this.Columns = 1;
      this.Rows = 2;
      this.InputTypes = ['email', 'password'];
    } else {
      this.Columns = 2;
      this.Rows = 1;
      this.InputTypes = ['email', 'password'];
    }
  }
}
