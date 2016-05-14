import { Component } from "@angular/core";

import { Contact } from "../models/contact";
import { AutoGrowDirective } from "../directives/autogrow.directive";

@Component({
  selector: 'contact-list',
  templateUrl: "app/templates/contact-list.tpl.html",
  styles: ['.search-box { width:180px }'],
  directives: [AutoGrowDirective]
})

export class ContactListComponent {
  contactList: Contact[] = [
    { id: 1, firstName: "Kishan", lastName: "Yadav", email: "kishan.yadav@metacube.com", mobNumber: "9414234126" },
    { id: 2, firstName: "Ram", lastName: "Sharma", email: "ram.sharma@metacube.com", mobNumber: "9432456781" },
    { id: 3, firstName: "Lakshman", lastName: "Singh", email: "lakshman.singh@metacube.com", mobNumber: "9876567856" },
    { id: 4, firstName: "Bharat", lastName: "Khan", email: "bharat.khan@metacube.com", mobNumber: "9878612345" },
    { id: 5, firstName: "Lucy", lastName: "Doe", email: "lucy.doe@metacube.com", mobNumber: "9786533212" },
    { id: 6, firstName: "Jack", lastName: "Reacher", email: "jack.reacher@metacube.com", mobNumber: "9007812345" }
  ];
  // hard coded here, but in real world apps, service should return this.

}
