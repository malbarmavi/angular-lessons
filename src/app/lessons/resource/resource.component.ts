import { Component, OnInit } from '@angular/core';

export interface IResource {
  url: string;
  title: string;
  type?: 'book' | 'video' | 'course';
}
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  public resourceList: IResource[];

  ngOnInit() {
    this.resourceList = [
      {
        title: 'CodeCraft Angular',
        type: 'course',
        url: 'https://codecraft.tv/courses/angular/quickstart/overview/'
      },
      {
        title: 'Mastering Angular',
        url:
          'https://mva.microsoft.com/search/SearchResults.aspx#!q=Mastering%20Angular&lang=1033',
        type: 'course'
      },
      {
        url: 'https://leanpub.com/developing-with-angular',
        title: 'Developing with Angular',
        type: 'book'
      }
    ];
  }
}
