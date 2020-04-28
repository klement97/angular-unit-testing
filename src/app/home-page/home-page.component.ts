import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

}
