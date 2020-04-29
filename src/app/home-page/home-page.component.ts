import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../_services/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  counter = 0;
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.getInitialLoginForm();
  }

  getInitialLoginForm(): FormGroup {
    return this.fb.group({
      // admin@it-works.io & demo2020 to login to sm-demo
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

  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.login();
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      res => this.onSuccess(res),
      err => this.onError(err)
    );
  }

  onSuccess(res) {
    this.errorMessage = '';
    console.log(res);
  }

  onError(err) {
    this.errorMessage = err.error.message;
    console.log(err);
  }

}
