import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson11",
  templateUrl: "./lesson11.component.html",
  styleUrls: ["./lesson11.component.scss"]
})
export class Lesson11Component implements OnInit {
  public colorList: string[] = [
    "black",
    "red",
    "green",
    "blue",
    "brown",
    "pink"
  ];
  public color: string;

  constructor() {}

  ngOnInit() {}

  public addColor(): void {
    if (this.color) {
      this.colorList.push(this.color);
      this.color = "";
    }
  }

  public removeColor(index: number): void {
    this.colorList.splice(index, 1);
  }
}
