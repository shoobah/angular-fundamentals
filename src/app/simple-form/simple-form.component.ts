import {Component, OnInit, Input} from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input #myInput type="text" [(ngModel)]="message" required>
      <button (click)="onClick($event, myInput.value)">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  ngOnInit() {}
}
