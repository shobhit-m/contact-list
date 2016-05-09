import { Injectable } from "@angular/core";

import { Contact } from "../models/contact";
import { CONTACTLIST } from "../mock-contact-list";

@Injectable()

export class ContactListService {
  private _contact: Contact;

  getContactList(): Contact[] {
    return CONTACTLIST;
  }

  getContact(id): Contact {
    return CONTACTLIST.find((item)=> item.id === id)
  }

  saveContact(contact: Contact) {
    contact.id = new Date().getTime();
    CONTACTLIST.push(contact);
  }

  updateContact(contact: Contact) {
    this._contact = this.getContact(contact.id);
    this._contact = contact;
  }
}
