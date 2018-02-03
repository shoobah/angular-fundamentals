import {Component, Output, OnInit, Input, EventEmitter} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="message">
      <button (click)="update.emit({text:message})">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();

  ngOnInit() {}
}
