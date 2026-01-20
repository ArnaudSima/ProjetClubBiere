import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'projet-test-NosProduits',
  templateUrl: './NosProduits.component.html',
  styleUrl: './NosProduits.component.css',
})
export class NosProduitsComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
}
