import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {newEvent} from '../testing.utils';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      declarations: [HomePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    debugElement = fixture.debugElement;
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
    expect(component.loginForm.get('email').errors.required).toBeDefined();
    expect(component.loginForm.get('password').errors.required).toBeDefined();
  });

  it('should not make request to login when invalid', () => {
    const button = debugElement.query(By.css('button')).nativeElement;
    expect(button.textContent).toEqual('LOGIN');
  });

  it('should remove required error from email after typing', () => {
    const emailInput: HTMLInputElement = debugElement.query(By.css('#email')).nativeElement;
    emailInput.value = 'notCorrectEmail';
    emailInput.dispatchEvent(newEvent('input'));
    fixture.detectChanges();

    const emailControl = component.loginForm.get('email');
    expect(emailControl.errors.required).toBeUndefined();
  });
});
