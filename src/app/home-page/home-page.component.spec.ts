import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent]
    })
           .compileComponents();
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
});
