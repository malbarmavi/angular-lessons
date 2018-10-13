import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson16",
  templateUrl: "./lesson16.component.html",
  styleUrls: ["./lesson16.component.scss"]
})
export class Lesson16Component implements OnInit {
  public style: any = {
    fontSize: 24,
    color: "red",
    bgColor: "lightgray",
    colors: [
      "white",
      "black",
      "red",
      "green",
      "blue",
      "yellow",
      "lightgray",
      "lightblue"
    ]
  };

  constructor() {}

  ngOnInit() {}
}
