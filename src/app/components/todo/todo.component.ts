import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() list: string[] = [];
  @Input() title = '';
  todoValue = '';

  constructor() {}

  addTodo() {
    this.list.push(this.todoValue);
    this.todoValue = '';
  }

  deleteTodo(index: number) {
    this.list.splice(index, 1);
  }
}
