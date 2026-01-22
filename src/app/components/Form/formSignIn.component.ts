import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'projet-test-form-sign-in',
  templateUrl: './formSignIn.component.html',
  styleUrl: './formSignIn.component.css',
  providers: [AuthService],
})
export class FormSignInComponent implements OnInit {
  ngOnInit(): void {}
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService) {}

  FormOnSubmit() {
    this.authService.LoginUser(this.email, this.password);
  }
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
  }
}
