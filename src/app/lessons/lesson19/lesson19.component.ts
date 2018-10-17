import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson19',
  templateUrl: './lesson19.component.html',
  styleUrls: ['./lesson19.component.scss']
})
export class Lesson19Component implements OnInit {

  public tasks: any[] = [ // progress,error,done
    { id: 0, title: 'task 01', states: 'progress' },
    { id: 1, title: 'task 02', states: 'error' },
    { id: 2, title: 'task 03', states: 'done' },
    { id: 3, title: 'task 04', states: 'progress' },
    { id: 4, title: 'task 05', states: 'done' },
    { id: 5, title: 'task 06', states: 'progress' },
    { id: 6, title: 'task 07', states: 'error' },
    { id: 7, title: 'task 08', states: 'done' },
  ]
  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.tasks = [ // progress,error,done
      { id: 0, title: 'task 01', states: 'progress' },
      { id: 1, title: 'task 02', states: 'error' },
      { id: 2, title: 'task 03', states: 'done' },
      { id: 3, title: 'task 04', states: 'progress' },
      { id: 4, title: 'task 05', states: 'done' },
      { id: 5, title: 'task 06', states: 'progress' },
      { id: 6, title: 'task 07', states: 'error' },
      { id: 7, title: 'task 08', states: 'done' },
    ]
  }

  up(i) {
    let temp = this.tasks[i - 1];
    this.tasks[i - 1] = this.tasks[i];
    this.tasks[i] = temp;
  }

  down(i) {
    let temp = this.tasks[i + 1];
    this.tasks[i + 1] = this.tasks[i];
    this.tasks[i] = temp;
  }

  removeItem(i) {
    this.tasks.splice(i, 1);
  }

}
