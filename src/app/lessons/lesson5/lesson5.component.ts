import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.scss']
})
export class Lesson5Component implements OnInit {

  userName: string = "user";
  lastName: string = "last";

  constructor() { }

  ngOnInit() {
  }

  updateLastName(value): void {
    this.lastName = value;
  }

}
