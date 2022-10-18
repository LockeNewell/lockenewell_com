import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ResumeComponentPDF } from './resume-pdf/resume-pdf.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'resume', component: ResumeComponent},
  {path:'resume-pdf', component: ResumeComponentPDF},
  {path:'portfolio', component: PortfolioComponent}, 
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'**', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
