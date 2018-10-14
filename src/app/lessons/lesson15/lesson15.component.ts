import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson15',
  templateUrl: './lesson15.component.html',
  styleUrls: ['./lesson15.component.scss']
})
export class Lesson15Component implements OnInit {
  fontSize = 24;
  color = 'red';
  bgColor = 'lightgray';

  colors: string[] = [
    'white',
    'black',
    'red',
    'green',
    'blue',
    'yellow',
    'lightgray',
    'lightblue'
  ];
  constructor() {}

  ngOnInit() {}
}
