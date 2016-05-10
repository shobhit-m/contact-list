import { Component } from "@angular/core";

import { Contact } from "../models/contact";
import { AutoGrowDirective } from "../directives/autogrow.directive";
import { ContactListService } from "../services/contact-list.service";
import { SearchPipe } from "../pipes/search.pipe";

@Component({
  selector: 'contact-list',
  templateUrl: "app/templates/contact-list.tpl.html",
  styles: ['.search-box { width:180px }'],
  directives: [AutoGrowDirective],
  providers: [ContactListService],
  pipes: [SearchPipe]
})

export class ContactListComponent {
  contactList: Contact[];
  searchText: string = "";

  constructor(private _contactListService: ContactListService){
    this.contactList = _contactListService.getContactList();
  }

}
