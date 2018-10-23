import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-lesson26",
  templateUrl: "./lesson26.component.html",
  styleUrls: ["./lesson26.component.scss"]
})
export class Lesson26Component implements OnInit {
  public form: FormGroup;
  public selectedValue: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required]],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: fb.group({
        country: ["", Validators.required],
        city: ["", Validators.required],
        street: null,
        zipCode: ["", [Validators.minLength(4), Validators.maxLength(4)]]
      })
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

  public get address(): FormGroup {
    return this.get("address") as FormGroup;
  }
}
