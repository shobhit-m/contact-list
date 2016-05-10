import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import { Contact } from "../models/contact";


@Injectable()

export class ContactListService {
  private _contact: Contact;
  private _contactListUrl = 'app/contact-list.json';  // URL to web api

  constructor (private http: Http) { }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getContactList(): Observable<Contact[]> {
    return this.http.get(this._contactListUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

}
