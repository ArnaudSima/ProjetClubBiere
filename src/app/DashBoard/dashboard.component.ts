import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
@Component({
  selector: 'projet-test-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashBoardComponent implements OnInit {
  email: string | undefined = '';
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    console.log(this.authService.CurrentUser);
    this.email = this.authService.CurrentUser?.Email;
  }
  logOut() {
    this.authService.LogOut();
    this.router.navigate(['/auth']);
  }
}
