import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ContactFormComponent } from "../components/contact-form.component";
import { ContactListComponent } from "../components/contact-list.component";
import { ContainerComponent } from './container.component';

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

@Component({
  selector: 'my-app',
  template: '<container><router-outlet></router-outlet></container>',
  directives: [ContainerComponent, ROUTER_DIRECTIVES],
  providers: [],
})

export class AppComponent { }
