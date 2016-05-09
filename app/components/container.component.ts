import {Component} from "@angular/core";

import { HeaderComponent } from './header.component';
import { ContactListComponent } from './contact-list.component';

@Component ({
  selector: 'container',
  templateUrl: "app/templates/container.tpl.html",
  directives: [HeaderComponent, ContactListComponent]
})

export class ContainerComponent { }
