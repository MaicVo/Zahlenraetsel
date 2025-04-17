"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const customer_list_component_1 = require("./customer/customer-list/customer-list.component");
const customer_detail_list_component_1 = require("./customer/customer-detail-list/customer-detail-list.component");
exports.routes = [
    { path: "customer", component: customer_list_component_1.CustomerListComponent },
    { path: "customerDetail", component: customer_detail_list_component_1.CustomerDetailListComponent },
    { path: "**", redirectTo: "/costumer" }
];
