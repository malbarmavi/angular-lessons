import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-lesson29",
  templateUrl: "./lesson29.component.html",
  styleUrls: ["./lesson29.component.scss"]
})
export class Lesson29Component implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public getData(): void {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe(result => console.log(result));
    // this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(console.log);
  }

  public sendData(): void {
    let data = {
      userName: "user01",
      message: "any message"
    };
    this.http
      .post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data))
      .subscribe(result => console.log(result));
  }
}
