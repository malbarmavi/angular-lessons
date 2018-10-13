import { Route, RouterModule } from "@angular/router";
import { Lesson0Component } from "./lesson0/lesson0.component";
import { NgModule } from "@angular/core";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";
import { Lesson4Component } from "./lesson4/lesson4.component";
import { Lesson5Component } from "./lesson5/lesson5.component";
import { Lesson6Component } from "./lesson6/lesson6.component";
import { Lesson7Component } from "./lesson7/lesson7.component";
import { Lesson8Component } from "./lesson8/lesson8.component";
import { Lesson9Component } from "./lesson9/lesson9.component";
import { Lesson10Component } from "./lesson10/lesson10.component";
import { Lesson11Component } from "./lesson11/lesson11.component";
import { InstallComponent } from "./install/install.component";
import { Lesson12Component } from "./lesson12/lesson12.component";
import { Lesson13Component } from "./lesson13/lesson13.component";
import { Lesson14Component } from "./lesson14/lesson14.component";
import { ResourceComponent } from "./resource/resource.component";
import { Lesson15Component } from "./lesson15/lesson15.component";
import { Lesson16Component } from "./lesson16/lesson16.component";
import { Lesson17Component } from "./lesson17/lesson17.component";

export const routes: Route[] = [
  {
    path: "install",
    component: InstallComponent,
    data: { title: "Install" }
  },
  {
    path: "lesson/0",
    component: Lesson0Component,
    data: { title: "Lesson 0" }
  },
  {
    path: "lesson/1",
    component: Lesson1Component,
    data: { title: "Lesson 1" }
  },
  {
    path: "lesson/2",
    component: Lesson2Component,
    data: { title: "Lesson 2" }
  },
  {
    path: "lesson/3",
    component: Lesson3Component,
    data: { title: "Lesson 3" }
  },
  {
    path: "lesson/4",
    component: Lesson4Component,
    data: { title: "Lesson 4" }
  },
  {
    path: "lesson/5",
    component: Lesson5Component,
    data: { title: "Lesson 5" }
  },
  {
    path: "lesson/6",
    component: Lesson6Component,
    data: { title: "Lesson 6" }
  },
  {
    path: "lesson/7",
    component: Lesson7Component,
    data: { title: "Lesson 7" }
  },
  {
    path: "lesson/8",
    component: Lesson8Component,
    data: { title: "Lesson 8" }
  },
  {
    path: "lesson/9",
    component: Lesson9Component,
    data: { title: "Lesson 9" }
  },
  {
    path: "lesson/10",
    component: Lesson10Component,
    data: { title: "Lesson 10" }
  },
  {
    path: "lesson/11",
    component: Lesson11Component,
    data: { title: "Lesson 11" }
  },
  {
    path: "lesson/12",
    component: Lesson12Component,
    data: { title: "Lesson 12" }
  },
  {
    path: "lesson/13",
    component: Lesson13Component,
    data: { title: "Lesson 13" }
  },
  {
    path: "lesson/14",
    component: Lesson14Component,
    data: { title: "Lesson 14" }
  },
  {
    path: "lesson/15",
    component: Lesson15Component,
    data: { title: "Lesson 15" }
  },
  {
    path: "lesson/16",
    component: Lesson16Component,
    data: { title: "Lesson 16" }
  },
  {
    path: "lesson/17",
    component: Lesson17Component,
    data: { title: "Lesson 17" }
  },
  {
    path: "Resources",
    component: ResourceComponent,
    data: { title: "Resources" }
  },
  { path: "", redirectTo: "install", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class LessonRouteModule {}
