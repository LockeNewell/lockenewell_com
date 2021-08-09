import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [								
    AppComponent,
    PortfolioComponent,
    ElevatorComponent,
    ResumeComponent,
      HomeComponent,
      PortfolioMenuComponent,
      PortfolioItemComponent,
      PortfolioMenuComponent,
      PortfolioListComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
