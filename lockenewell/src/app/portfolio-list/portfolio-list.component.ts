import { Component, OnInit } from '@angular/core';
import { portfolioList } from '../configs/portfolioList.config';
import { PortfolioItem } from '../objects';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  portfolioItems: PortfolioItem[] = portfolioList;
  skillFilter: string[];
  get filteredPortfolioItems(): PortfolioItem[] {
    return this.portfolioItems.filter(item => this.testPortfolioItem(item) );
  }
  constructor() { }

  ngOnInit() {
  }

  displaySkills(skills: string[]): string {
    return skills.join(', ');
  }
  getImageUrl(path: string): string {
    return '../../assets/' + path;
  }
  testPortfolioItem(portfolioItem: PortfolioItem): boolean {
    return true
  }

}
