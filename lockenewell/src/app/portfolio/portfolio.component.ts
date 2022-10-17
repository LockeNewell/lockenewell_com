import { Component, OnInit } from '@angular/core';
import { portfolioList } from '../configs/portfolioList.config';
import { PortfolioItem } from '../objects';
// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-portfolio',
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' },
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioItems: PortfolioItem[] = portfolioList;
  portfolioItem: PortfolioItem;
  get portfolioItemSet(): boolean { return (this.portfolioItem)?true:false; }

  constructor() { 
  }

  ngOnInit() {
  }

}
