import { Component, OnInit } from '@angular/core';
import { portfolioList } from '../configs/portfolioList.config';
import { PortfolioItem } from '../objects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
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
