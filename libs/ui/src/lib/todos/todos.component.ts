import { Component, Input, OnInit } from '@angular/core';
import {Todo} from '@angular-nxexample/data'
@Component({
  selector: 'angular-nxexample-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
