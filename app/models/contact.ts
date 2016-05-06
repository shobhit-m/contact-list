
export class Contact {

  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public mobNumber: string;

  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    mobNumber?: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobNumber = mobNumber;
  }

}
