import { Component } from '@angular/core';
import {contactMethods} from './objects/contactMethods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Locke Newell';
  header2 = 'Personal Website';
  year = 2021;
  navigationLinks = [
    {title:'Home', route:'/elevator', name:'Home', id:'1'},
    {title:'Resume', route:'/resume', name:'Resume', id:'2'},
    {title:'Portfolio', route:'/portfolio', name:'Portfolio', id:'3'}
  ];
  contactMethods = contactMethods;
}
