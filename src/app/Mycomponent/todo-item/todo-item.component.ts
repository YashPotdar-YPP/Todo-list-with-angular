import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() CheakTodo:EventEmitter<Todo>=new EventEmitter();
  delete(todo:Todo){
    this.todoDelete.emit(todo)
    console.log("Deleted")
  }
}
