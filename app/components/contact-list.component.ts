import { Component } from "@angular/core";

import { Contact } from "../models/contact";
import { AutoGrowDirective } from "../directives/autogrow.directive";
import { ContactListService } from "../services/contact-list.service";

@Component({
  selector: 'contact-list',
  templateUrl: "app/templates/contact-list.tpl.html",
  styles: ['.search-box { width:180px }'],
  directives: [AutoGrowDirective],
  providers: [ContactListService]
})

export class ContactListComponent {
  contactList: Contact[];

  constructor(private _contactListService: ContactListService){
    this.contactList = _contactListService.getContactList();
  }

}
