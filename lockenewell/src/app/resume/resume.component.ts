import { Component, OnInit } from '@angular/core';
import { contactMethods } from '../configs/contactMethods.config';
import { skillItem } from '../objects'
import { jobExperience } from '../configs/jobExperience.config';
import { educationExperience } from '../configs/educationExperience.config';
import { skillList } from '../configs/skillList.config';
import { toolList } from '../configs/toolList.config';
import { ViewportScroller } from '@angular/common';

enum SkillLevel {
  MASTER = 'success',
  USER = 'info',
  BEGINNER = 'warning'
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

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
}
