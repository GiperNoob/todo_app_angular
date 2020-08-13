import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, TodoListComponent, AddFormComponent, FilterPipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
