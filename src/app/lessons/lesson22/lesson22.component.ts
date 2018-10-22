import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lesson22',
  templateUrl: './lesson22.component.html',
  styleUrls: ['./lesson22.component.scss']
})
export class Lesson22Component implements OnInit {


  public simpleForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.simpleForm = fb.group({
      name: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''], // '' or null
    });
  }

  ngOnInit() {
  }

  public save() {
    console.log(this.simpleForm.value)
  }

}
