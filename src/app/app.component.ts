import { Component } from '@angular/core';
import { AuthService } from './Services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService],
})
export class AppComponent {
  title = 'angular-projet-test';
}
