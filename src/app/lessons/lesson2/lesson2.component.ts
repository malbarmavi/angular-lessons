import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {

  public name: string = "Welcome from Lesson 2"
  constructor() { }

  ngOnInit() {
  }


  public updateName(): void {
    this.name = "Next Lesson !!!!!";
  }



}
