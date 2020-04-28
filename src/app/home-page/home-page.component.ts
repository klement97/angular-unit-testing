import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  counter = 0;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.getInitialLoginForm();
  }

  getInitialLoginForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

}
