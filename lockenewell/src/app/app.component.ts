import { Component } from '@angular/core';
import {contactMethods} from './configs/contactMethods.config';
import { navigationLinks } from './configs/navigationLinks.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header = 'Locke Newell';
  header2 = 'Personal Website';
  year = 2021;
  navigationLinks = navigationLinks
  contactMethods = contactMethods;

  updateActiveLink(id: string) {
    if(this.navigationLinks){
      this.navigationLinks.forEach(item => item.active = false);
      let newActiveLink = this.navigationLinks.find(item=>item.id===id);
      if(newActiveLink){
        newActiveLink.active=true;
      }

    }
  }
}
