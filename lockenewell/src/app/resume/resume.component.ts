import { Component, OnInit } from '@angular/core';
import { contactMethods } from '../objects/contactMethods';
import {experiences} from '../objects/experiences';
import {education} from '../objects/education';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  contactMethods = contactMethods;
  experiences = experiences;
  education = education;
  constructor() { }

  ngOnInit() {
  }

}
