import { Component } from "@angular/core";
import { NgForm }    from '@angular/common';
import { Router }    from '@angular/router-deprecated';
import { RouteParams } from "@angular/router-deprecated";

import { Contact } from "../models/contact"
import { ContactListService } from "../services/contact-list.service";

@Component({
  selector: 'contact-form',
  templateUrl: "app/templates/contact-form.tpl.html",
  providers: [ContactListService]
})

export class ContactFormComponent {
  contact: Contact;

  constructor(
    private _contactListService: ContactListService,
    private _routeParams: RouteParams,
    private _router: Router
  ) { }

  ngOnInit() {
    if(this._routeParams.get("id")) {
      this.contact = this._contactListService.getContact(this._routeParams.get("id"));
    } else {
      this.contact = new Contact();
    }
  }

  onSubmit() {
    if (!this.contact.id) {
      this._contactListService.saveContact(this.contact);
    } else {
      this._contactListService.updateContact(this.contact);
    }
    this._router.navigate(['ContactList'])
  }
}
