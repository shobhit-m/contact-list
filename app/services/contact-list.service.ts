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

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json().data;
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  // fat arrow functions or lamda expression. it makes simple for you to create a function.
  getContactList(): Observable<Contact[]> {
    return this.http.get(this._contactListUrl)
                    .map((response: Response) => response.json().data)
                    //.map(this.extractData)
                    .catch(this.handleError);
  }

}
