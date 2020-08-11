import { ITodo } from './../app.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    todos: ITodo[],
    searchTodoByText: string,
    searchTodoByDate: string
  ): ITodo[] {
    if (!searchTodoByText.trim() && !searchTodoByDate) {
      return todos;
    } else if (searchTodoByText.trim()) {
      return todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTodoByText.toLowerCase())
      );
    } else if (searchTodoByDate) {
      return todos.filter((todo) => todo.date.includes(searchTodoByDate));
    }
  }
}
