import { ITodo } from './../app.component';

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  form: FormGroup;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAdd: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  @ViewChild('titleInput', { static: true }) inputRef: ElementRef;

  localStorageTodos = JSON.parse(localStorage.getItem('savedToDos'));

  text = '';

  id =
    this.localStorageTodos && this.localStorageTodos.length
      ? this.localStorageTodos[0].id + 1
      : 1;

  ngOnInit(): void {
    this.form = new FormGroup({
      textTodo: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),

      dateTodo: new FormControl(null, Validators.required),
    });
  }

  addTodo(): void {
    if (this.form.valid) {
      const post: ITodo = {
        text: this.form.value.textTodo,
        date: this.form.value.dateTodo,
        id: this.id++,
      };

      this.onAdd.emit(post);
      this.text = '';
      this.inputRef.nativeElement.focus();
    }
  }
}
