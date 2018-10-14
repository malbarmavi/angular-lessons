import { Component } from '@angular/core';
import { lessonRoutesList } from './lessons/lessons.module';
import { Router, NavigationEnd, RouterEvent, Routes } from '@angular/router';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Training';

  public index = 0;

  public lessonsList: { path: string; title: string }[] = [];

  constructor(private _router: Router) {
    // set routes list by routes list so the list will update dynamic everytime new route added
    const routes = lessonRoutesList;
    this.lessonsList = routes
      .filter(r => r.path !== '')
      .map(r => ({ path: r.path, title: r.data.title }));
  }

  ngOnInit() {
    // get the route index when page reload
    this._router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        first()
      )
      .subscribe((e: RouterEvent) => {
        if (e.url) {
          this.index = this.lessonsList.findIndex(
            r => r.path === e.url.substr(1)
          );

          this.index = this.index === -1 ? 0 : this.index;
        }
      });
  }

  public next() {
    if (this.index < this.lessonsList.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this._nav();
  }

  public prev() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.lessonsList.length - 1;
    }
    this._nav();
  }

  private _nav(): void {
    this._router.navigateByUrl(this.lessonsList[this.index].path);
  }

  public updateIndex(index: number): void {
    this.index = index;
  }
}
