import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import { Contact } from "../models/contact";
//Injecting a service into a service
//Http
//

@Injectable()

export class ContactListService {
  private _contact: Contact;
  private _contactListUrl = 'app/contact-list.json';  // URL to web api

  constructor (private http: Http) { }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getContactList(): Observable<Contact[]> {
    return this.http.get(this._contactListUrl)
                    .map((response: Response) => response.json().data)
                    .catch(this.handleError);
  }

}
