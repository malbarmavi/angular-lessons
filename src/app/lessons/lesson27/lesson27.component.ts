import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-lesson27",
  templateUrl: "./lesson27.component.html",
  styleUrls: ["./lesson27.component.scss"]
})
export class Lesson27Component implements OnInit {
  public form: FormGroup;
  public selectedValue: any;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required]],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: fb.array([this.getAddressFormGroup()])
    });
  }

  ngOnInit() {}

  public save() {
    console.log(this.form.value);
    this.selectedValue = this.form.value;
  }

  public reset(): void {
    this.form.reset();
    this.form.controls["address"] = this.fb.array([this.getAddressFormGroup()]); // reset form array
    console.log(this.form.value);
    this.selectedValue = null;
  }

  public get(name: string): AbstractControl {
    return this.form.get(name);
  }

  public get address(): FormArray {
    return this.get("address") as FormArray;
  }

  getAddressFormGroup() {
    return this.fb.group({
      country: ["", Validators.required],
      city: ["", Validators.required],
      street: null,
      zipCode: ["", [Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  addAddressFormGroup(): void {
    const formArray = this.form.get("address") as FormArray;
    formArray.push(this.getAddressFormGroup());
  }
}
