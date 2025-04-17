"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const customer_service_1 = require("./customer.service");
describe('CustomerService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(customer_service_1.CustomerService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
