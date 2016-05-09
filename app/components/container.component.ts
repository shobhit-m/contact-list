import {Component} from "@angular/core";

import { HeaderComponent } from './header.component';

@Component ({
  selector: 'container',
  templateUrl: "app/templates/container.tpl.html",
  directives: [HeaderComponent]
})

export class ContainerComponent { }
