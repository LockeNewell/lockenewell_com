import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeComponentPDF } from './resume-pdf/resume-pdf.component';
import { HomeComponent } from './home/home.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
  ],
  declarations: [								
    AppComponent,
    PortfolioComponent,
    ElevatorComponent,
    ResumeComponent,
    ResumeComponentPDF,
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
