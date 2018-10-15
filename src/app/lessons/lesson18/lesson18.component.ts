import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson18',
  templateUrl: './lesson18.component.html',
  styleUrls: ['./lesson18.component.scss']
})
export class Lesson18Component implements OnInit {

  public lessons: any[] = [
    { id: '0', title: 'Lesson 1' },
    { id: '2', title: 'Lesson 2' },
    { id: '3', title: 'Lesson 3' },
    { id: '4', title: 'Lesson 4' },
    { id: '5', title: 'Lesson 5' },
    { id: '6', title: 'Lesson 6' },
    { id: '7', title: 'Lesson 7' },
    { id: '8', title: 'Lesson 8' },
  ];

  selectedItem: any;

  constructor() { }

  ngOnInit() {
  }

}
