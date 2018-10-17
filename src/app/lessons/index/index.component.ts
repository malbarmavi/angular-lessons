import { Component, OnInit } from '@angular/core';
import { routes } from '../lessons.routing';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public lessons: any[];
  constructor() { }

  ngOnInit() {
    this.lessons = routes.filter(r => r.path != '')
      .map(r => ({ path: r.path, title: r.data.title }))
  }

}
