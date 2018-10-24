import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson30",
  templateUrl: "./lesson30.component.html",
  styleUrls: ["./lesson30.component.scss"]
})
export class Lesson30Component implements OnInit {
  public number = Math.PI;
  public currentDate = new Date();
  public dateForms = [
    "short",
    "medium",
    "long",
    "full",
    "shortDate",
    "mediumDate",
    "longDate",
    "fullDate",
    "shortTime",
    "mediumTime",
    "longTime",
    "fullTime"
  ];

  public user: any = {
    id: 1,
    name: "name01",
    lastName: "lastName01",
    address: {
      country: "country name",
      city: "city name",
      street: "street name"
    },
    age: 35,
    email: "example@example.com"
  };

  ngOnInit() {}
}
