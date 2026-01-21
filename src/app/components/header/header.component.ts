import { Component } from '@angular/core';
@Component({
  selector: 'projet-test-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  buttonToggledNumber: number = 0;
  togglePrimaryButton(buttonNumber: number): void {
    this.buttonToggledNumber = buttonNumber;
  }
}
