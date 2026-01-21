import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'projet-test-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Input() Rows: number = 0;
  @Input() Columns: number = 0;
  @Input() InputTypes: string[] = [];
  Matrix: string[][] = [[]];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.Matrix = Array.from({ length: this.Rows }, (_, i) =>
      this.InputTypes.slice(i * this.Columns, this.Columns + i * this.Columns),
    );
  }
}
