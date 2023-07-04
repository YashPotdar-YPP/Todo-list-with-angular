import { Component,EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  title: string;
  Submit() {
    const todo = {
      sno: 1,
      title: this.title,
      active: true,
    };
    this.addTodo.emit(todo)
  }
}
