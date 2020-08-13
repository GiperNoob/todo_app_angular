import { Component, OnInit } from '@angular/core';

export interface ITodo {
  text: string;
  date: string;
  id: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: ITodo[] = [];

  title = 'todo';

  searchTodoByText = '';
  searchTodoByDate = '';

  reverseDateFlag = true;
  reverseTextFlag = true;

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('savedToDos'))) {
      this.todos = JSON.parse(localStorage.getItem('savedToDos'));
    }
  }

  addTodo(todo: ITodo): void {
    this.todos.push(todo);

    localStorage.clear();
    localStorage.setItem('savedToDos', JSON.stringify(this.todos));
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    localStorage.clear();
    localStorage.setItem('savedToDos', JSON.stringify(this.todos));
  }

  getCodeFirstLetter(todo: ITodo): number {
    return todo.text.charCodeAt(0);
  }

  sortByText(): void {
    this.todos = this.todos.sort((a, b) =>
      this.reverseTextFlag
        ? this.getCodeFirstLetter(a) - this.getCodeFirstLetter(b)
        : this.getCodeFirstLetter(b) - this.getCodeFirstLetter(a)
    );

    this.reverseTextFlag = !this.reverseTextFlag;
    this.reverseDateFlag = true;
  }

  dateToNumber(todo: ITodo): number {
    return +todo.date.split('-').reduce((acc, item) => acc + item);
  }

  sortByDate(): void {
    this.todos = this.todos.sort((a, b) =>
      this.reverseDateFlag
        ? this.dateToNumber(a) - this.dateToNumber(b)
        : this.dateToNumber(b) - this.dateToNumber(a)
    );

    this.reverseDateFlag = !this.reverseDateFlag;
    this.reverseTextFlag = true;
  }

  reset(): void {
    this.todos = this.todos.sort((a, b) => b.id - a.id);

    this.reverseDateFlag = true;
    this.reverseTextFlag = true;

    this.searchTodoByDate = '';
    this.searchTodoByText = '';
  }
}
