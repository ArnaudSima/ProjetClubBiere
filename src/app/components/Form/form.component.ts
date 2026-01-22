import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() Title: string = '';
  @Output() AuthData = new EventEmitter<any>();
  Matrix: string[][] = [[]];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.Matrix = Array.from({ length: this.Columns }, (_, i) =>
      this.InputTypes.slice(i * this.Rows, this.Rows + i * this.Rows),
    );
  }
  FormOnSubmit() {
    this.AuthData.emit('test');
  }
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
  }
}
