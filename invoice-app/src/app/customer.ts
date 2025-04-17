export class Customer {
public id: string;
  constructor(
    public firstname: string,
    public lastname: string,
    public street: string,
    public zip: string,
    public city: string,
    public discontinued?: boolean,
    public imageURL?: string,
    public lastOrderDate?: Date
  ){
 this.id = crypto.randomUUID();
  }
}
