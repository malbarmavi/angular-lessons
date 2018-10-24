import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Lesson0Component } from "./lesson0/lesson0.component";
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
import { LessonRouteModule } from "./lessons.routing";
import { InstallComponent } from "./install/install.component";
import { Lesson12Component } from "./lesson12/lesson12.component";
import { Lesson13Component } from "./lesson13/lesson13.component";
import { Lesson14Component } from "./lesson14/lesson14.component";
import { ResourceComponent } from "./resource/resource.component";
import { MaterialModule } from "../modules/material.module";
import { Lesson15Component } from "./lesson15/lesson15.component";
import { Lesson16Component } from "./lesson16/lesson16.component";
import { Lesson17Component } from "./lesson17/lesson17.component";
import { Lesson18Component } from "./lesson18/lesson18.component";
import { Lesson19Component } from "./lesson19/lesson19.component";
import { IndexComponent } from "./index/index.component";
import { Lesson20Component } from "./lesson20/lesson20.component";
import { Lesson21Component } from "./lesson21/lesson21.component";
import { Lesson22Component } from "./lesson22/lesson22.component";
import { Lesson23Component } from "./lesson23/lesson23.component";
import { Lesson24Component } from "./lesson24/lesson24.component";
import { Lesson25Component } from "./lesson25/lesson25.component";
import { Lesson26Component } from "./lesson26/lesson26.component";
import { Lesson27Component } from "./lesson27/lesson27.component";
import { Lesson28Component } from "./lesson28/lesson28.component";
import { Lesson29Component } from "./lesson29/lesson29.component";
import { Lesson30Component } from "./lesson30/lesson30.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LessonRouteModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    InstallComponent,
    IndexComponent,
    ResourceComponent,
    Lesson0Component,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component,
    Lesson9Component,
    Lesson10Component,
    Lesson11Component,
    Lesson12Component,
    Lesson13Component,
    Lesson14Component,
    Lesson15Component,
    Lesson16Component,
    Lesson17Component,
    Lesson18Component,
    Lesson19Component,
    Lesson20Component,
    Lesson21Component,
    Lesson22Component,
    Lesson23Component,
    Lesson24Component,
    Lesson25Component,
    Lesson26Component,
    Lesson27Component,
    Lesson28Component,
    Lesson29Component,
    Lesson30Component
  ]
})
export class LessonsModule {}

export { routes as lessonRoutesList } from "./lessons.routing";
