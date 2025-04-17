"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(firstname, lastname, street, zip, city, discontinued, imageURL, lastOrderDate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.street = street;
        this.zip = zip;
        this.city = city;
        this.discontinued = discontinued;
        this.imageURL = imageURL;
        this.lastOrderDate = lastOrderDate;
        this.id = crypto.randomUUID();
    }
}
exports.Customer = Customer;
