import { Component, OnInit } from '@angular/core';
import { contactMethods } from '../configs/contactMethods.config';
import { jobExperience } from '../configs/jobExperience.config';
import { educationExperience } from '../configs/educationExperience.config';
import { skillList } from '../configs/skillList.config';
import { toolList } from '../configs/toolList.config';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  contactMethods = contactMethods;
  experiences = jobExperience;
  education = educationExperience;
  skills = skillList;
  tools = toolList;

  constructor() {}

  ngOnInit() {
  }

  stringListJoin(list: string[]): string {
    return list.join(', ');
  }
}
