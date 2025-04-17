"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerListComponent = void 0;
const core_1 = require("@angular/core");
const customer_service_1 = require("../../customer.service");
let CustomerListComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-customer-list',
            templateUrl: './customer-list.component.html',
            providers: [customer_service_1.CustomerService],
            standalone: false,
            styleUrl: './customer-list.component.css'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _costumerList_decorators;
    let _costumerList_initializers = [];
    let _costumerList_extraInitializers = [];
    let _customerSelectedEvent_decorators;
    let _customerSelectedEvent_initializers = [];
    let _customerSelectedEvent_extraInitializers = [];
    var CustomerListComponent = _classThis = class {
        customerSelected(selectedCustomer) {
            if (selectedCustomer == this.selectedCustomer) {
                if (selectedCustomer.discontinued) {
                    selectedCustomer.discontinued = false;
                }
                else {
                    selectedCustomer.discontinued = true;
                }
            }
            this.selectedCustomer = selectedCustomer;
            this.customerSelectedEvent.emit(selectedCustomer);
        }
        constructor(customerService) {
            this.costumerList = __runInitializers(this, _costumerList_initializers, []);
            this.customerSelectedEvent = (__runInitializers(this, _costumerList_extraInitializers), __runInitializers(this, _customerSelectedEvent_initializers, new core_1.EventEmitter()));
            this.selectedCustomer = __runInitializers(this, _customerSelectedEvent_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CustomerListComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _costumerList_decorators = [(0, core_1.Input)()];
        _customerSelectedEvent_decorators = [(0, core_1.Output)()];
        __esDecorate(null, null, _costumerList_decorators, { kind: "field", name: "costumerList", static: false, private: false, access: { has: obj => "costumerList" in obj, get: obj => obj.costumerList, set: (obj, value) => { obj.costumerList = value; } }, metadata: _metadata }, _costumerList_initializers, _costumerList_extraInitializers);
        __esDecorate(null, null, _customerSelectedEvent_decorators, { kind: "field", name: "customerSelectedEvent", static: false, private: false, access: { has: obj => "customerSelectedEvent" in obj, get: obj => obj.customerSelectedEvent, set: (obj, value) => { obj.customerSelectedEvent = value; } }, metadata: _metadata }, _customerSelectedEvent_initializers, _customerSelectedEvent_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CustomerListComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CustomerListComponent = _classThis;
})();
exports.CustomerListComponent = CustomerListComponent;
