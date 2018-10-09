import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-lesson1",
  templateUrl: "./lesson1.component.html",
  styleUrls: ["./lesson1.component.scss"]
})
export class Lesson1Component implements OnInit {
  public example = "{{propertyName}}";

  public name: string = "Lesson 1";

  constructor() {}

  ngOnInit() {}

  public getLessonNumber(): number {
    return 1;
  }
}
