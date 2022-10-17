import { Component, OnInit } from '@angular/core';
// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-home',
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
