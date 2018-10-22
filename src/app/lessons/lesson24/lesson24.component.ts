import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-lesson24",
  templateUrl: "./lesson24.component.html",
  styleUrls: ["./lesson24.component.scss"]
})
export class Lesson24Component implements OnInit {
  public form: FormGroup;
  public selectedValue: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required]],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: [""]
    });
  }

  ngOnInit() {}

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
