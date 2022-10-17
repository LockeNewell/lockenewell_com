import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import jsPDF from 'jspdf';
import * as pdfMake  from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

var htmlToPdfmake = require( 'html-to-pdfmake');
// import fade in animation
import { fadeInAnimation } from '../_animations/index';
import { contactMethods } from '../configs/contactMethods.config';
import { skillItem, EducationItem } from '../objects'
import { jobExperience } from '../configs/jobExperience.config';
import { educationExperience } from '../configs/educationExperience.config';
import { skillList } from '../configs/skillList.config';
import { toolList } from '../configs/toolList.config';
import { ViewportScroller } from '@angular/common';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
enum SkillLevel {
  MASTER = 'success',
  USER = 'info',
  BEGINNER = 'warning'
}
@Component({
  selector: 'app-resume',
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' },
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  @ViewChild('resume') resume: ElementRef;

  contactMethods = contactMethods;
  experiences = jobExperience;
  education = educationExperience;
  skills: skillItem[] = skillList;
  maxSkillExperience: number = 60;
  tools = toolList;

  constructor( private viewportScroller: ViewportScroller) {
    this.skills.sort((a,b)=>a.jobLink-b.jobLink)
  }

  ngOnInit() {
  }

  stringListJoin(list: string[]): string {
    return list.join(', ');
  }
  getSkillListJoin(): string {
    let out = '';
    skillList.forEach(skill => {
      if(out){
        out += ', ' + skill.name
      } else {
        out = skill.name
      }
    })
    return out;
  }
  getSkillPercent(experience: number): number {
    return (experience>this.maxSkillExperience)? 100 : (experience/this.maxSkillExperience)*100;
  }
  getSkillLevel(experience: number): string {
    let percent = this.getSkillPercent(experience);
    if(percent > 99)
      return SkillLevel.MASTER;
    if(percent > 33)
      return SkillLevel.USER;
    return SkillLevel.BEGINNER;

  }
  onClickScroll(elementId: string){
    this.viewportScroller.scrollToAnchor(elementId);
  }
  skillTooltip(skill: skillItem): string {
    let job = this.experiences.find( (job) => job.id === skill.jobLink );
    let output = '';
    if (job) {
      output = 'I have used ' + skill.name + ' professionally for ' + this.yeasAndMonthsFromMonths(skill.experience) + '. Most recently as a ' + job.title;
      if(job.name==='Self Employed') {
        output = output + ' while ' + job.name;
      }else {
        output = output + ' at ' + job.name;
      }
    }
    return output;
  }
  yeasAndMonthsFromMonths(monthCount: number): string { 
    let output = '';
    let yearOutput = '';
    let monthOutput = '';
    let yearCount = Math.floor(monthCount/12);
    let remainderMonthCount = monthCount%12;

    if (yearCount === 1){
      yearOutput = yearCount + " year";
    }
    else if (yearCount > 1){
      yearOutput = yearCount + " years"; 
    }

    if (remainderMonthCount === 1) {
      monthOutput = remainderMonthCount + " month";
    } else if (remainderMonthCount > 1) {
      monthOutput = remainderMonthCount + " months";
    }

    if (yearOutput.length>1){
      if (monthOutput.length>1){
        return yearOutput + ' and ' + monthOutput
      } else {
        return yearOutput;
      }
    } else {
      return monthOutput;
    }


    return output;
  }
  getEducationLocation(item: EducationItem): string {
    let out = item.name;
    if (item.location) {
      out += ", " + item.location
    }
    return out;
  }
  public downloadResumeAsPDF(): void {
    const doc = new jsPDF();
   
    const resume = this.resume.nativeElement;
   
    var html = htmlToPdfmake(resume.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 

  }
}
