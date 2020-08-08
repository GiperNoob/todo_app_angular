import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  title = 'todo';

  searchTodo = '';

  todos: ITodo[] = [];

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('savedToDos'))) {
      this.todos = JSON.parse(localStorage.getItem('savedToDos'));
    }
  }

  addItem(todo: ITodo): void {
    this.todos.unshift(todo);
    localStorage.clear();
    localStorage.setItem('savedToDos', JSON.stringify(this.todos));
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    // localStorage.removeItem(id.toString());
    localStorage.clear();
    localStorage.setItem('savedToDos', JSON.stringify(this.todos));
  }
}
