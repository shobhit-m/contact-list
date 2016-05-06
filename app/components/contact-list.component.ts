import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Contact } from "../models/contact";
import { ContactListService } from "../services/contact-list.service";
import { SearchPipe } from "../pipes/search.pipe";

@Component({
  selector: 'contact-list',
  templateUrl: "app/templates/contact-list.tpl.html",
  providers: [ContactListService],
  directives: [ROUTER_DIRECTIVES],
  pipes: [SearchPipe]
})

export class ContactListComponent {
  contactList: Contact[];
  searchText: string = "";

  constructor(private _contactListService: ContactListService){
    this.contactList = _contactListService.getContactList();
  }
}
