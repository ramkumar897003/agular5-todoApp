import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Todo App';
  todos = ['Item1', 'Item2'];
  title: string = '';

  constructor() {

  }

  onSubmit() {
  	if(this.title) {
  		this.todos.push(this.title);
  		this.title = '';
  	}
  }

  deleteTodo(key) {
  	this.todos.splice(key, 1);
  }
}
