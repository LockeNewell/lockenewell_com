import { Component, OnInit } from '@angular/core';
import { portfolioList } from '../configs/portfolioList.config';
import { PortfolioItem } from '../objects';

@Component({
  selector: 'app-portfolio-menu',
  templateUrl: './portfolio-menu.component.html',
  styleUrls: ['./portfolio-menu.component.scss']
})
export class PortfolioMenuComponent implements OnInit {

  portfolioItems: PortfolioItem[] = portfolioList;
  constructor() { }

  ngOnInit() {
  }
  update(id: string){
    alert(id);
  }

}
