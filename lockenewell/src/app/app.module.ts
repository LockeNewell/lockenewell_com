import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { ResumeComponent } from './resume/resume.component';

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
    ResumeComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
