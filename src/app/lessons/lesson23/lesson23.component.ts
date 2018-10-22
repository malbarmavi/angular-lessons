import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-lesson23',
  templateUrl: './lesson23.component.html',
  styleUrls: ['./lesson23.component.scss']
})
export class Lesson23Component implements OnInit {

  public form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
    });
  }

  ngOnInit() {
  }

  public save() {
    console.log(this.form.value)
  }

  public reset(): void {
    this.form.reset();
    console.log(this.form.value)
  }

  public get(name: string): AbstractControl {
    return this.form.get(name);
  }

}
