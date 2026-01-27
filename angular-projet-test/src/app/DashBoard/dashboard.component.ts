import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { Languages } from '../../assets/customTypes/Languages';
@Component({
  selector: 'projet-test-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashBoardComponent implements OnInit {
  email: string | undefined = '';
  preferredLanguage: Languages = 'FR';
  constructor(
    private authService: AuthService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    console.log(this.authService.CurrentUser);
    this.email = this.authService.CurrentUser?.Email;
    this.preferredLanguage = this.authService.LanguagePref;
  }
  logOut() {
    this.authService.LogOut();
    this.router.navigate(['/auth']);
  }
  changeLanguage(currentLanguage: Languages) {
    this.authService.ChangeLanguage(currentLanguage);
    this.preferredLanguage = currentLanguage;
    this.cdRef.detectChanges();
  }
}
