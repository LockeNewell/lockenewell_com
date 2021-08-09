import { Component, OnInit } from '@angular/core';
import { portfolioList } from '../configs/portfolioList.config';
import { PortfolioItem } from '../objects';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  portfolioItems: PortfolioItem[] = portfolioList;
  constructor() { }

  ngOnInit() {
  }

}
