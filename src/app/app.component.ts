import { Component } from '@angular/core';

export interface ITodo {
  text: string;
  data: string;
  id: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';

  searchTodo = '';

  todos: ITodo[] = [
    { text: 'Create App', data: '01/01/2020', id: 1 },

    { text: 'Drink Coffee!!!', data: '01/01/2020', id: 2 },
  ];

  addItem(todo: ITodo): void {
    this.todos.unshift(todo);
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
