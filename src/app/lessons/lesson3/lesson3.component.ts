import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lesson3', templateUrl: './lesson3.component.html', styleUrls: ['./lesson3.component.scss']
}

) export class Lesson3Component implements OnInit {
  public mouseState: string = "";
  count: number = 0;
  constructor() { }
  ngOnInit() { }

  onEnter() {
    console.log('Enter');
    this.mouseState = "Enter -_-";
  }


  onHover() {
    console.log('Hover');
    this.mouseState = "Hover :)";
  }

  onLeave() {
    console.log('Leave');
    this.mouseState = "Leave :\\";
  }

  log(e?: MouseEvent) {
    if (!e) {
      console.log('%c Hi from console! ', 'background: #4285f4; color: #fff;border:5px dashed #ea4335;font-size:5rem');
    }
    else {
      console.log(e)
    }
  }

  inc() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }

}