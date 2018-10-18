import { Component, OnInit } from '@angular/core';
import { LessonsService } from './services/lessons.service';

@Component({
  selector: 'app-lesson20',
  templateUrl: './lesson20.component.html',
  styleUrls: ['./lesson20.component.scss'],
  providers: [LessonsService]
})
export class Lesson20Component implements OnInit {
  lessonsData: any[] = []
  constructor(private _lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsData = this._lessonsService.getLessonData();
  }

}
