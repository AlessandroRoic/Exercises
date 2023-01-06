import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {TodoComponent} from "./components/todo/todo.component";

@NgModule({
  declarations: [
    AppComponent, TodoItemComponent, TodoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
