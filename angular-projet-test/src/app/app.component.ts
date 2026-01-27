import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/Auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-projet-test';
  isMajor: boolean = false;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.isMajor = this.authService.IsMajor;
  }
  ChangeIsMajor(isMajor: boolean) {
    this.authService.ChangeIsMajor(isMajor);
    this.isMajor = isMajor;
  }
}
