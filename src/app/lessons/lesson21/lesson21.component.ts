import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson21',
  templateUrl: './lesson21.component.html',
  styleUrls: ['./lesson21.component.scss']
})
export class Lesson21Component implements OnInit {

  public simpleForm: FormGroup;
  constructor() {
    this.simpleForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),

    })
  }

  ngOnInit() {
  }

  public save() {
    console.log(this.simpleForm.value)
  }

}
