import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [			
    AppComponent,
    PortfolioComponent,
    ElevatorComponent,
    ResumeComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
