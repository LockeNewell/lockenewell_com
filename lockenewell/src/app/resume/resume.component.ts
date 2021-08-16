import { Component, OnInit } from '@angular/core';
import { contactMethods } from '../configs/contactMethods.config';
import { jobExperience } from '../configs/jobExperience.config';
import { educationExperience } from '../configs/educationExperience.config';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  contactMethods = contactMethods;
  experiences = jobExperience;
  education = educationExperience;
  constructor() { }

  ngOnInit() {
  }

}
