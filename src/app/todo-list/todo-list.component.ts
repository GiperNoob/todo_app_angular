import { ITodo } from './../app.component';

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todo: ITodo;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRemove = new EventEmitter<number>();

  flagComplete = true;

  buttonText = 'Not complete';

  removeTodo(): void {
    this.onRemove.emit(this.todo.id);
  }

  todoComplete(): void {
    this.flagComplete
      ? (this.buttonText = 'Not complete')
      : (this.buttonText = 'Complete');
  }
}
