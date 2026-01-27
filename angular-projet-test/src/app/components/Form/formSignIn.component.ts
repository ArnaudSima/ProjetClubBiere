import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'projet-test-form-sign-in',
  templateUrl: './formSignIn.component.html',
  styleUrl: './formSignIn.component.css',
})
export class FormSignInComponent implements OnInit {
  ngOnInit(): void {}
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  FormOnSubmit() {
    if (this.authService.CredentialsAreCorrect(this.email, this.password)) {
      this.authService.LoginUser({
        Email: this.email,
        Password: this.password,
      });
      this.router.navigate(['/dashboard']);
    } else {
      //something
    }
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
  }
}
