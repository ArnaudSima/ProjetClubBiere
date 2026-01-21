import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'projet-test-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  Rows: number = 4;
  Columns: number = 4;
  InputTypes: string[] = [
    'email',
    'password',
    'email',
    'password',
    'email',
    'password',
    'email',
    'password',
  ];
}
