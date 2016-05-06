import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { HeaderComponent } from './header.component';
import { ContactListComponent } from './contact-list.component';
import { ContactFormComponent } from './contact-form.component';

@Component ({
  selector: 'container',
  templateUrl: "app/templates/container.tpl.html",
  directives: [HeaderComponent, ContactListComponent, ContactFormComponent, ROUTER_DIRECTIVES]
})

export class ContainerComponent { }
