import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'projet-test-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.css',
})
export class InformationsComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
}
