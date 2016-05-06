import {Pipe, PipeTransform} from "@angular/core";

import { Contact } from "../models/contact";

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform{
  transform(contactList: Contact[], args: string){
    return contactList.filter((item)=> item.firstName.toUpperCase().indexOf( args.toUpperCase() ) > -1 );
  }
}
