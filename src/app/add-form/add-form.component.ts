import { ITodo } from './../app.component';

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAdd: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  @ViewChild('titleInput', { static: true }) inputRef: ElementRef;
  @ViewChild('dateInput', { static: false }) dateInputRef: ElementRef;

  text = '';

  data = '';

  id = 1;

  constructor() {}

  ngOnInit(): void {
    this.inputRef.nativeElement.focus();
  }

  addTodo(): void {
    this.data = this.dateInputRef.nativeElement.value;

    if (this.text.trim() && this.data.trim()) {
      const post: ITodo = {
        text: this.text,

        id: this.id++,

        data: this.data,
      };

      this.onAdd.emit(post);

      this.text = '';

      this.inputRef.nativeElement.focus();
    }
  }
}
