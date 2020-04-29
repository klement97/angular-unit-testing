import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      declarations: [HomePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an initial value', () => {
    expect(component.counter).toBe(0);
    expect(component.errorMessage).toBe('');
  });

  it('should increment/decrement the counter', () => {
    const initialCounter = component.counter;
    component.increment();
    expect(component.counter).toBeGreaterThan(initialCounter);
    expect(component.counter).toBe(initialCounter + 1);
    const incrementedCounter = component.counter;

    component.decrement();
    expect(component.counter).toBeLessThan(incrementedCounter);
    expect(component.counter).toBe(incrementedCounter - 1);
  });

  it('should initialize login form', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.invalid).toBeTruthy();
    expect(component.loginForm.value).toEqual({email: '', password: ''});
    expect(component.loginForm.get('email').errors.required).not.toBeUndefined();
    expect(component.loginForm.get('password').errors.required).not.toBeUndefined();
  });

  // it('should not make request to login when invalid', () => {
  // expect(component.loginForm)
  // });
});
