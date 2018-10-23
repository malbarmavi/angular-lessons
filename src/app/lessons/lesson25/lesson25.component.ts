import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { UserDataService } from "./services/user-data.service";

@Component({
  selector: "app-lesson25",
  templateUrl: "./lesson25.component.html",
  styleUrls: ["./lesson25.component.scss"],
  providers: [UserDataService]
})
export class Lesson25Component implements OnInit {
  public form: FormGroup;
  public selectedValue: any;

  // public positions = ["Manager", "Employee"];
  // public skills = ["Javascript", "CSS", "HTML", "Typescript"];
  // public educations = ["PhD", "Master", "University"];

  public positions = [];
  public educations = [];

  constructor(fb: FormBuilder, private _userData: UserDataService) {
    this.form = fb.group({
      name: ["", [Validators.required]],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      gender: ["M"],
      position: [null, Validators.required],
      education: [null, Validators.required],
      address: [],
      state: ["", Validators.required]
    });
  }

  ngOnInit() {
    this._userData
      .getEducations()
      .subscribe(result => (this.educations = result));

    this._userData
      .getPositions()
      .subscribe(result => (this.positions = result));
  }

  public save() {
    console.log(this.form.value);
    this.selectedValue = this.form.value;
  }

  public reset(): void {
    this.form.reset();
    console.log(this.form.value);
    this.selectedValue = null;
  }

  public get(name: string): AbstractControl {
    return this.form.get(name);
  }
}
