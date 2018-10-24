import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-lesson28",
  templateUrl: "./lesson28.component.html",
  styleUrls: ["./lesson28.component.scss"]
})
export class Lesson28Component implements OnInit {
  public form: FormGroup;
  public selectedValue: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required]],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      userType: [""]
    });
  }

  ngOnInit() {
    this.form.get("userType").valueChanges.subscribe(value => {
      if (value == "user") {
        this.form.get("email").enable();
      } else {
        this.form.get("email").disable();
        this.form.get("email").setValue(null);
      }
    });
  }

  public save() {
    console.log(this.form.value);
    this.selectedValue = this.form.value;
  }

  public reset(): void {
    this.form.reset({ userType: "user" });
    console.log(this.form.value);
    this.selectedValue = null;
  }

  public get(name: string): AbstractControl {
    return this.form.get(name);
  }
}
