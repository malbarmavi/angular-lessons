import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson9',
  templateUrl: './lesson9.component.html',
  styleUrls: ['./lesson9.component.scss']
})
export class Lesson9Component implements OnInit {


  public colorList: string[] = ['black', 'red', 'green', 'blue', 'brown', 'pink'];
  public color: string;

  constructor() { }

  ngOnInit() {
  }

  public addColor(): void {
    if (this.color) {
      this.colorList.push(this.color);
      this.color = '';
    }
  }

  public removeColor(index: number): void {
    this.colorList.splice(index, 1);
  }

  onPressEnter(e: KeyboardEvent): void {
    if (e.keyCode === 13) {
      this.addColor();
    }

  }
}
