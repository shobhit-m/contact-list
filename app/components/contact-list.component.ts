import { Component } from "@angular/core";
import { Observable }     from 'rxjs/Observable';

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
  //contactList: Observable<Contact[]>;
  errorMessage: any;

  constructor(private _contactListService: ContactListService){
     this._contactListService.getContactList().subscribe(
                      contactList => this.contactList = contactList,
                      error =>  this.errorMessage = <any>error);
    //this.contactList = this._contactListService.getContactList();
  }

}
