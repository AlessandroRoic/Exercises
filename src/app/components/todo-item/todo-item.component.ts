import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() label = '';
  @Output() onDelete = new EventEmitter<void>();
  itemChecked = false;
}