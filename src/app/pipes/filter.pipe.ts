import { ITodo } from './../app.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: ITodo[], searchTodo: string): ITodo[] {
    if (!searchTodo.trim()) {
      return todos;
    }

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTodo.toLowerCase())
    );
  }
}
