import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ElevatorComponent } from './elevator/elevator.component';


const routes: Routes = [
  {path:'', redirectTo: '/elevator', pathMatch: 'full' },
  {path:'elevator', component: ElevatorComponent},
  {path:'resume', component: ResumeComponent},
  {path:'portfolio', component: PortfolioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
