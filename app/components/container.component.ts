import {Component} from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { HeaderComponent } from './header.component';
import { ContactListComponent } from './contact-list.component';
import { ContactFormComponent } from './contact-form.component';

@RouteConfig([
  {
    path: '/contact-list',
    name: 'ContactList',
    component: ContactListComponent,
    useAsDefault: true
  },
  {
    path: '/contact/new',
    name: 'ContactFormNew',
    component: ContactFormComponent
  },
  {
    path: '/contact/:id',
    name: 'ContactForm',
    component: ContactFormComponent
  },
  {
    path: '/*other',
    name: 'Other',
    redirectTo: ['ContactList']
  },
])

@Component ({
  selector: 'container',
  templateUrl: "app/templates/container.tpl.html",
  directives: [HeaderComponent, ContactListComponent, ContactFormComponent, ROUTER_DIRECTIVES]
})

export class ContainerComponent { }
