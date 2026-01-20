import { Component } from '@angular/core';
@Component({
  selector: 'projet-test-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  labels : string[] = [
    'Connexion',
    "Inscription"
  ]
  isOpen : Boolean = false;

  toggleDropDownUserIcon():void{
    this.isOpen = !this.isOpen
  }
}
