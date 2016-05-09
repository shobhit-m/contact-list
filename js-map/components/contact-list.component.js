"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ContactListComponent = (function () {
    function ContactListComponent() {
        this.contactList = [
            { id: 1, firstName: "Kishan", lastName: "Yadav", email: "kishan.yadav@metacube.com", mobNumber: "9414234126" },
            { id: 2, firstName: "Ram", lastName: "Sharma", email: "ram.sharma@metacube.com", mobNumber: "9432456781" },
            { id: 3, firstName: "Lakshman", lastName: "Singh", email: "lakshman.singh@metacube.com", mobNumber: "9876567856" },
            { id: 4, firstName: "Bharat", lastName: "Khan", email: "bharat.khan@metacube.com", mobNumber: "9878612345" },
            { id: 5, firstName: "Lucy", lastName: "Doe", email: "lucy.doe@metacube.com", mobNumber: "9786533212" },
            { id: 6, firstName: "Jack", lastName: "Reacher", email: "jack.reacher@metacube.com", mobNumber: "9007812345" }
        ];
    }
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: "app/templates/contact-list.tpl.html",
        }), 
        __metadata('design:paramtypes', [])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map