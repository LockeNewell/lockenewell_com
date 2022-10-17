import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 30000, noPause: false, showIndicators: true } }
  ]
})
export class ElevatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
